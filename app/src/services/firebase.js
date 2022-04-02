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

export const get_once = (name, dispatch) => {
  //Se almacenan los dispositivos dentro del Store central de Redux
  db.ref(`${name}/`).once('value', (snapshot) => {
    dispatch({
      type: `GET_${name.toUpperCase()}`,
      payload: snapshot.val(),
    });
  });
};

export default db;
