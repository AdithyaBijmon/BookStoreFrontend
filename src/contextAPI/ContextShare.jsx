import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")

function ContextShare({ children }) {
  const [searchKey, setSearchKey] = useState("")
  const [userEditResponse, setUserEditResponse] = useState({})

  return (
    <searchBookContext.Provider value={{ searchKey, setSearchKey }}>
      <userEditResponse value={{ userEditResponse, setUserEditResponse }}> {children}</userEditResponse>
    </searchBookContext.Provider>
  )
}

export default ContextShare