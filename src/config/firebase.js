import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDS47z4wn2kG5K7P8Z0fZVTSoP6ZSrzw3k",
  authDomain: "tiktok-clone-c8ab5.firebaseapp.com",
  projectId: "tiktok-clone-c8ab5",
  storageBucket: "tiktok-clone-c8ab5.appspot.com",
  messagingSenderId: "1020867945349",
  appId: "1:1020867945349:web:85a3dac9c1b99529d45aec",
  measurementId: "G-KY1PNS8SW7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
