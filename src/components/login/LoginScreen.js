import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { types } from "../../types/types";
import { AuthContext } from "../../auth/authContext";


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Invitado'
            }
        }
        dispatch( action );

        //se redirecciona a la ultima pagina que se visitó (o al inicio) y se envía replace = true para que si el usuario toca atrás ya no pueda volver al login (reemplaza en el history)
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate( lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}