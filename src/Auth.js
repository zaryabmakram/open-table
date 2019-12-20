import React, {useEffect, useState} from 'react';
import app from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // run only once on component mounting
    useEffect(()=>{
        app.auth().onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{user}}
        >
            {children}
        </AuthContext.Provider>
    );
}