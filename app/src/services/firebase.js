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

//databaseURL: `http://localhost:9000/?ns=control-domotica-test-default-rtdb`,
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

export const getOnce = (name, dispatch) => {
  //Se almacenan los dispositivos dentro del Store central de Redux
  db.ref(`${name}/`).once('value', (snapshot) => {
    dispatch({
      type: `GET_${name.toUpperCase()}`,
      payload: snapshot.val(),
    });
  });
};

export const removeEnviroment = async (id) => {
  const environmentRef = db.ref('enviroments/' + id);
  await environmentRef.remove();
};

export const removeDevice = async (id) => {
  return db
    .ref('enviroments/')
    .once('value', (snapshot) => {
      snapshot.forEach((envChild) => {
        envChild
          .child('devices')
          .child(id)
          .ref.remove(() => {
            console.log(`${id} was Deleted from ${envChild.key}`);
          });
      });
    })
    .then(() => {
      db.ref('devices/' + id).remove(() => {
        console.log(id, 'was removed');
      });
    });
};

// export const removeDevice = async (id) => {
//   const refEnviroment = db.ref('enviroments/');
//   const snapEnviroment = await refEnviroment.once('value');
//   for (const [key, env] of Object.entries(snapEnviroment.val())) {
//     console.log(key, env);
//   }
//   const refDevice = db.ref('devices/' + id);
//   // await refDevice.remove();
//   console.log(id, 'was removed');
// };

// export const removeRoom = async (id) => {
//   return db.ref('rooms/' + id + '/devices/').once('value', (snapshot) => {
//     snapshot.forEach((deviceByRoom) => {
//       removeDevice(deviceByRoom.key).then(() => {
//         db.ref('rooms/' + id).remove(() => {
//           console.log(id, 'was deleted');
//         });
//       });
//     });
//   });
// };

export const removeRoom = async (id) => {
  const deviceRef = db.ref('rooms/' + id + '/devices/');
  const deviceSnap = await deviceRef.once('value');
  for (const device in deviceSnap.val()) {
    await removeDevice(device);
  }
  const roomRef = db.ref('rooms/' + id);
  await roomRef.remove();
  console.log(id, 'room was removed');
};

export default db;
