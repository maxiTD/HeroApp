import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    //Si el usuario NO está logueado se renderiza la pantalla de login, caso contrario se redirecciona al inicio
    return user.logged ? <Navigate to='/' /> : children;
};