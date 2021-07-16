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

firebase.initializeApp({
  databaseURL: `http://localhost:9000/?ns=control-domotica-test-default-rtdb
`,
});
const db = firebase.database();
db.useEmulator('localhost', 9000);

export default db;
