import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    //Obetener el path actual
    const { pathname, search } = useLocation();
    //Grabar el path en localStorage
    localStorage.setItem('lastPath', pathname + search); 

    //Si el usuario está logueado se renderizan los componentes, caso contrario se redirecciona al login
    return user.logged ? children : <Navigate to='/login' />;
};
