import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const navegate = useNavigate();

  const { login } = useContext( AuthContext )

  const onLogin = () => {

    login( 'David Zapata' );

    navegate('/', {
      replace: true,
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        type="button"
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
      
    </div>
  )
}
