import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializationAuth from '../Firebase/firebase.init';


initializationAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

   const [user, setUser] = useState()
   const [error, setError] = useState()
   const [isLoading, setIsLoading] = useState(true)
   const [admin, setAdmin] = useState(false)


   //google signIn
   const auth = getAuth();
   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)

   }


   // register email password
   const registerWithEmailPassword = (email, password, name, history, url) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            setUser(userCredential.user)
            setError("")
            history?.push(url)
            updateUserName(name)
            saveUser(email, name, "POST")
            window.location.reload();
            history?.push(url)
         })
         .catch((error) => {
            setError(error.message
            )
         })
         .finally(() => {
            setIsLoading(false)
         });
   }

   // login email password
   const signInWithEmailPassword = (email, password, history, url) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            setError("")
            history?.push(url)
         })
         .catch((error) => {
            setError("Enter your valid email password")
         })
         .finally(() => {
            setIsLoading(false)
         });
   }


   //update user
   const updateUserName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name,
      }).then(() => {
         const newUser = { ...user, displayName: name }
         setUser(newUser)
      }).catch((error) => {
         setError(error)
      });
   }

   //user collection
   const saveUser = (email, name, method) => {
      const data = { email, name }
      fetch('http://localhost:5000/users', {
         method: method,
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      }).then()
   }

   useEffect(() => {
      fetch(`http://localhost:5000/users/${user?.email}`,)
         .then(res => res.json())
         .then(data => setAdmin(data.admin))
   }, [user?.email])

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {

            setUser(user)
         } else {
            setUser({})
         }
         setIsLoading(false)
      });

   }, [])


   // sign out
   const logOut = () => {
      setIsLoading(true)
      signOut(auth).then(() => {
         setUser({})
      }).catch((error) => {
         setError(error)
      })
         .finally(() => {
            setIsLoading(false)
         })
   }

   // reset/forgot password
   const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)

   }

   return {
      signInWithGoogle, signInWithEmailPassword, user, error, isLoading, logOut, admin, registerWithEmailPassword, resetPassword, setError, setUser, saveUser
   }
};

export default useFirebase;