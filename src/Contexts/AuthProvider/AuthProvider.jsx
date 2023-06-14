/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signInUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    const logInUser =(email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const socialLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    const LogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
       const unscribe = onAuthStateChanged(auth, (currentUser)=>{
          
            setUser(currentUser);
           if(currentUser){
            axios.post('https://ass-sever.vercel.app/jwt', {email:currentUser.email})
            .then(data => {
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
           }
           else{
            localStorage.removeItem('access-token')
           }
           
        })
        return ()=>{
            unscribe()
        }
    },[])
    
    const authInfo = {
        user,
        loading,
        signInUser,
        createProfile,
        logInUser,
        socialLogin,
        LogOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;