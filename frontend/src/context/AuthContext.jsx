import React, { createContext } from 'react'
export const authDataContext=createContext()
function AuthContext({children}) {
const serverUrl="https://linkedin-clone-backend-8tre.onrender.com"
    let value={
        serverUrl
    }
  return (
    <div>
     <authDataContext.Provider value={value}> 
     {children}
     </authDataContext.Provider> 
    </div>
  )
}

export default AuthContext
