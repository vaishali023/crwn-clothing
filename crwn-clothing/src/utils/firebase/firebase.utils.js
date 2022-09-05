import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword
      } from 'firebase/auth';

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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapShot = await getDoc(userDocRef);
   console.log(userSnapShot);

   if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
 
    
   try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
      }
    );
   } catch (error) {
     console.log("Error creating the user", error.message);
   }
  }
  return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password);
  }