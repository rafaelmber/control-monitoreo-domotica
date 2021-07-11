import firebase from 'firebase';

var db = firebase.database();
if (location.hostname === 'localhost') {
  // Point to the RTDB emulator running on localhost.
  db.useEmulator('localhost', 9000);
}
