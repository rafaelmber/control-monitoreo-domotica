// Set the configuration for your app
// TODO: Replace with your project's config object
/*
var config = {
  apiKey: 'apiKey',
  authDomain: 'projectId.firebaseapp.com',
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: 'http://localhost:9000/',
  storageBucket: 'bucket.appspot.com',
};
*/

import firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
});
const db = firebase.database();
if (process.env.NODE_ENV === 'development') {
  db.useEmulator('localhost', 9000);
}

// export const auth = firebase.auth();
// if (process.env.NODE_ENV === 'development') {
//   auth.useEmulator('http://localhost:9099');
// }

export const getAllDataOnce = async (system) => {
  const systemRef = db.ref(`systems/${system}`);
  const snapshot = await systemRef.once('value');
  return snapshot.val();
};

export const deviceStatusRef = (deviceId) => {
  const statusRef = db.ref(`/systems/system_1/devices/${deviceId}/status`);
  return statusRef;
};

export const toggleDeviceStatus = async (deviceId, status) => {
  const deviceStatus = db.ref(`/systems/system_1/devices/${deviceId}/`);
  try {
    await deviceStatus.update({ status: !status });
  } catch (error) {
    console.log('Error en el cambio de estado de un dispositivo:', error);
  }
};

export const setDeviceStatusOnDB = async (deviceId, status) => {
  const deviceStatus = db.ref(`/systems/system_1/devices/${deviceId}/`);
  await deviceStatus.update({ status: status });
};

export const setRoom = async (room) => {
  const ref = db.ref('/systems/system_1/rooms/' + room.id);
  await ref.set({
    name: room.name,
  });
};

export const updateRoom = async (roomId, name) => {
  const ref = db.ref('systems/system_1/rooms/' + roomId);
  await ref.update({ name: name });
};

export const setDevice = async (device) => {
  try {
    const deviceRef = db.ref('systems/system_1/devices/' + device.id);
    await deviceRef.set({
      name: device.name,
      type: device.type,
      room: device.room,
      status: device.status || false,
    });
  } catch (error) {
    console.log('Error', error);
  }
};

export const removeEnviroment = async (envId) => {
  const environmentRef = db.ref('systems/system_1/environments/' + envId);
  await environmentRef.remove();
};

export const removeDevice = async (deviceId) => {
  await removeDeviceFromEnvs(deviceId);
  const deviceRef = db.ref('systems/system_1/devices/' + deviceId);
  try {
    await deviceRef.remove();
  } catch (error) {
    console.log(error);
  }
};

const removeDeviceFromEnvs = async (deviceId) => {
  //Delete device from Environments
  const envsRef = db.ref('systems/system_1/environments/');
  const snapshotEnv = await envsRef.once('value');
  snapshotEnv.forEach((envChild) => {
    if (envChild.exists()) {
      const device = envChild.child('devices').child(deviceId);
      if (device.exists()) {
        device.ref.remove().catch((error) => {
          console.log(error);
        });
      }
    }
  });
};

export const removeRoom = async (id) => {
  const devideRef = db.ref('systems/system_1/devices/');
  const deviceSnap = await devideRef.once('value');
  for (const deviceId in deviceSnap.val()) {
    const device = deviceSnap.val()[deviceId];
    if (device.room === id) {
      await removeDevice(deviceId);
    }
  }
  const roomRef = db.ref('systems/system_1/rooms/' + id);
  try {
    await roomRef.remove();
  } catch (error) {
    console.log(error);
  }
};

export default db;
