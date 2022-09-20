import React, { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
_id :"6325d1bea87ac1e31f6d05b4",
username : "Mace Windu",
email : "mace.windu@gmail.com", 
profilePicture : "",
coverPicture : "",
isAdmin: false,
followers : [],
following : [],
  },
  isFetching: false,
  error: false,
}

export const AuthContext = createContext(INITIAL_STATE)


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext