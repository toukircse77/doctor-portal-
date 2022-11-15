import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, GithubAuthProvider } from 'firebase/auth'
import app from '../Firebase/firebase.config';

 export const AuthContext = createContext();
 const auth = getAuth(app)
 const googleProvider = new GoogleAuthProvider()
 const githubProvider = new GithubAuthProvider();
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true);
 //create user 
 const creatUser = (email, pass) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, pass)
}
//Sign in
const singInPage = (email, pass) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, pass)
}
//Update name
const upDateUser = (name) => {
    setLoding(true)
    return updateProfile(auth?.currentUser, { displayName: name })
}
const singInAutoGoogle = () => {
    setLoding(true)
    return signInWithPopup(auth, googleProvider)
}

const GitHubLogin = () =>{
    setLoding(true)
    return signInWithPopup(auth, githubProvider)
}
//forget password
const forgetPassword = (email) => {
    setLoding(true)
    return sendPasswordResetEmail(auth, email)
}
//Log out user 
const userLogOut = () => {
    setLoding(true)
    return signOut(auth)
}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
        setUser(user)
        //    setLoding(false)
        setTimeout(() => {
            setLoding(false)
        }, 1300);
    })
    return () => {
        unSubscribe()
    }
}, [])


    const authInfo = {user, loading,GitHubLogin, setLoding, singInPage, forgetPassword, creatUser, upDateUser, singInAutoGoogle, userLogOut }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;