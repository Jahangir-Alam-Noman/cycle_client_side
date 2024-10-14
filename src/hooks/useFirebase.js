/** @format */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useState } from "react";

// Initialize firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(" ");
  const [isLoading, setIsloading] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsloading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  return {
    user,
    authError,
    isLoading,
    signInWithGoogle,
  };
};

export default useFirebase;
