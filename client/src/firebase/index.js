/* eslint-disable no-undef */
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
import {useState, useEffect} from 'react';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBUCfZQCldXDedOdHwEK9N1_DX8TPK6z4k",
  authDomain: "mvp-local-guide.firebaseapp.com",
  projectId: "mvp-local-guide",
  storageBucket: "mvp-local-guide.appspot.com",
  messagingSenderId: "780542390621",
  appId: "1:780542390621:web:6dc4e000e52cbe03f6b8b4",
  measurementId: "G-BRW62XF5NF"
});
const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(firebaseApp)
const useAuth = () => {
  const [userLogin, setUserLogin] = useState();


  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user !== null) {
        setUserLogin(user.email);
      } else {
        setUserLogin(null);
      }
    })
  },[])

  return userLogin;

}
export default useAuth;
