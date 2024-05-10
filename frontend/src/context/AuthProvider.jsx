import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const initalAuthUser = localStorage.getItem("User");

    const [authUser,setAuthUser] = useState(
        initalAuthUser ? JSON.parse(initalAuthUser):undefined
    )

    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
             {children}
        </AuthContext.Provider>
    )
};

export const useAuth =()=> useContext(AuthContext);

