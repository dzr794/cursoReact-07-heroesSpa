import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState ); 

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{ 
      ...authState, // TENER CUIDADO PORQUE AL DESESTRUCTURAR SE PUEDEN SOBRE ESCRIBIR PROPIEDADES CON LAS SIGUIENTES LINEAS
      login: login
     }}>
      { children }
    </AuthContext.Provider>
  );
}
