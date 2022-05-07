import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFF6AAn5wCDxZllqSayJ3bF_gXof00EwY",
  authDomain: "wish-hut-admin.firebaseapp.com",
  projectId: "wish-hut-admin",
  storageBucket: "wish-hut-admin.appspot.com",
  messagingSenderId: "601823274982",
  appId: "1:601823274982:web:3ac2bf7e3a9b57ff8f5827",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
