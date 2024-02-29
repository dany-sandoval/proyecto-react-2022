/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

  const[usuario, setUsuario] = useState({})
  useEffect(() => {
    setUsuario({
      name: "El Barto",
      registered: "28/Febrero/2024"
    })
  }, [])

  return(
    <UserContext.Provider value={usuario}>
      { children }
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}