import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider } from 'firebase/auth';

import {
      getFirestore,
      doc,
      getDoc,
      setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaF80d7x_MK9cBPAUaevEXjukS9j6DTv0",
    authDomain: "crwn-clothing-db-aeb1a.firebaseapp.com",
    projectId: "crwn-clothing-db-aeb1a",
    storageBucket: "crwn-clothing-db-aeb1a.appspot.com",
    messagingSenderId: "103195253518",
    appId: "1:103195253518:web:25dce4ac3c6a77d30fd55f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapShot = await getDoc(userDocRef);
  };