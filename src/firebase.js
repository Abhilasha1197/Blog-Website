import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeI5efEXhl_A0QQdY7uNdQAdd3eHifqVk",
  authDomain: "react-blog-website-45ce2.firebaseapp.com",
  projectId: "react-blog-website-45ce2",
  storageBucket: "react-blog-website-45ce2.appspot.com",
  messagingSenderId: "424454981586",
  appId: "1:424454981586:web:429a8f79c574be6b652a0b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
