import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializationAuth from '../Firebase/firebase.init';


initializationAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

   const [user, setUser] = useState({})
   const [error, setError] = useState('')
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
            updateUserName(name)
            saveUser(email, name, "POST")
            history?.push(url)
            window.location.reload();
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
            window.location.reload();
         })
         .catch(() => {
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
      fetch('https://fathomless-taiga-77170.herokuapp.com/users', {
         method: method,
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      }).then()
   }

   useEffect(() => {
      fetch(`https://fathomless-taiga-77170.herokuapp.com/users/${user.email}`)
         .then(res => res.json())
         .then(data => setAdmin(data?.admin))
         .catch((e) => {

         })
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
   const logOut = (history, uri) => {
      setIsLoading(true)
      signOut(auth).then(() => {
         setUser({})
         history?.push(uri)
         window.location.reload();
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