import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDls5mRXSRPR0O2Xm3v9CDyALSUMYjVNB8",
  authDomain: "email-password-auth-e26a4.firebaseapp.com",
  projectId: "email-password-auth-e26a4",
  storageBucket: "email-password-auth-e26a4.firebasestorage.app",
  messagingSenderId: "407135079333",
  appId: "1:407135079333:web:b2387d1fd36aa9301bf64c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
