import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
  apiKey: "AIzaSyAQPNvf_Zj3sGaPaVrPhA8Kp3lz2lERUo8",
  authDomain: "hobbylobby-3a2ff.firebaseapp.com",
  databaseURL: "https://hobbylobby-3a2ff.firebaseio.com",
  projectId: "hobbylobby-3a2ff",
  storageBucket: "hobbylobby-3a2ff.appspot.com",
  messagingSenderId: "446443798482",
  appId: "1:446443798482:web:b153ec33bb661b12"
};
  firebase.initializeApp(firebaseConfig);


export default firebase;