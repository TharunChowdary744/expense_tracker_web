import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4QDZdeUsZmO44JTvWv7IsfOge3Jl26CU",
    authDomain: "expense-tracker-9dd01.firebaseapp.com",
    databaseURL: "https://expense-tracker-9dd01-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-9dd01",
    storageBucket: "expense-tracker-9dd01.appspot.com",
    messagingSenderId: "247924081479",
    appId: "1:247924081479:web:032d87aacdd3766f90c262",
    measurementId: "G-DB0CRWNF67"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
