import { useNavigate } from "react-router-dom";


export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        //se redirecciona al inicio y se envía replace = true para que si el usuario toca atrás ya no pueda volver al login (reemplaza en el history)
        navigate( '/', {
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