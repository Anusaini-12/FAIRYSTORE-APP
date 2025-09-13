import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC39EO93ekLbAIbYtQdmJnCvXWApBOhBrs",
  authDomain: "fairystore-9fc49.firebaseapp.com",
  projectId: "fairystore-9fc49",
  storageBucket: "fairystore-9fc49.firebasestorage.app",
  messagingSenderId: "386736382361",
  appId: "1:386736382361:web:6ecae3b625e814b879f308",
  measurementId: "G-SM8G7Y1B9G"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

