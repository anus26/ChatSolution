import { createContext, useContext, useState } from "react";



export const AuthContext=createContext()
export const AuthProvider=({children})=>{
const raw=localStorage.getItem("ChatAI")
let parsed= undefined


try {
parsed=raw?JSON.parse(raw):undefined
} catch (error) {
    console.error("failed to parse auth user data",error);
    
}

const [authUser,setAuthUser]=useState(parsed)
return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}

    </AuthContext.Provider>

)
}
export const useAuth=()=>useContext(AuthContext)