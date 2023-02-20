/* eslint-disable */


import { useCallback, useEffect, useState, createContext } from "react"

export const AppContext = createContext()

const DOGSHOP_LS_KEY = "DOGSHOP_LS_KEY"

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const tokenFromLS = localStorage.getItem(DOGSHOP_LS_KEY)
    const preparedData = tokenFromLS ? JSON.parse(tokenFromLS) : []
    
    return preparedData
  })
  

  useEffect(() => {
    localStorage.setItem(DOGSHOP_LS_KEY, JSON.stringify(token))
  }, [token])

  const removeToken = useCallback(() => setToken(""), [setToken])

  return (
    <AppContext.Provider value={{ token, setToken, removeToken }}>
      {children}
    </AppContext.Provider>
  )
}

