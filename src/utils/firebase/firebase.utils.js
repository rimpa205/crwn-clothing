import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCifP-I1KmctDUv87gSIb58Q9kjp0L7sic",
    authDomain: "crwn-clothing-db-df53c.firebaseapp.com",
    projectId: "crwn-clothing-db-df53c",
    storageBucket: "crwn-clothing-db-df53c.appspot.com",
    messagingSenderId: "45559563071",
    appId: "1:45559563071:web:0b7c69186fe60cf34f098a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  })

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
  export const db=getFirestore();
  export const createUserDocumentFromAuth =async(userAuth)=>{
   const userDocRef=doc(db,'users',userAuth.uid)
   const userSnapShot=await getDoc(userDocRef);
   console.log(userSnapShot)

   if(!userSnapShot.exists()){
const {displayName,email}=userAuth;
const createdAt=new Date();
try{
    await setDoc(userDocRef,{displayName,email,createdAt})
}catch(error){
console.log('error creating the user',error.message)
}
   }

   return userDocRef;
  }