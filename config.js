import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDZLDxYRxxkuuV9OZq-sfBPxtFewl4JPWk",
  authDomain: "lycooper-tcc.firebaseapp.com",
  databaseURL: "https://lycooper-tcc-default-rtdb.firebaseio.com",
  projectId: "lycooper-tcc",
  storageBucket: "lycooper-tcc.appspot.com",
  messagingSenderId: "748014054771",
  appId: "1:748014054771:web:2ade1e4ac867804b23a906",
  measurementId: "G-CEQSR39GMC"
};

const appFS = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = { app, database };

