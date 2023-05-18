import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/FirebaseConfig';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;