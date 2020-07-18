import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSo-2Q7UAINWJOwJ4X2qHwnhWLXctP8WE",
    authDomain: "crwn-db-100d2.firebaseapp.com",
    databaseURL: "https://crwn-db-100d2.firebaseio.com",
    projectId: "crwn-db-100d2",
    storageBucket: "crwn-db-100d2.appspot.com",
    messagingSenderId: "254863548601",
    appId: "1:254863548601:web:72bc337b45165847da7b68"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log("Error", err.message)
    }
  }
   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({params: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


