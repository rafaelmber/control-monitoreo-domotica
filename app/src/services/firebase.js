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
  apiKey: 'AIzaSyDDFU31vvO5tUEe4FRzEZ6NmgLEhWgpLpE',
  authDomain: 'control-domotica-test.firebaseapp.com',
  databaseURL: 'https://control-domotica-test-default-rtdb.firebaseio.com',
  projectId: 'control-domotica-test',
  storageBucket: 'control-domotica-test.appspot.com',
  messagingSenderId: '553624393321',
  appId: '1:553624393321:web:ba03d396caf78a408b74f8',
  measurementId: 'G-BFY3J1Z9S1',
});
const db = firebase.database();
//db.useEmulator('localhost', 9000);

export default db;
