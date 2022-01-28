import { Routes, Route, BrowserRouter} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                {/** /login es una ruta pública */}
                <Route path="/login" element={ 
                    <PublicRoute>
                        <LoginScreen /> 
                    </PublicRoute>
                    } 
                />

                {/** Cualquier ruta que no sea la de login es privada, por lo que se verifica que el usuario esté autenticado */}
                <Route path="/*" element={ 
                    <PrivateRoute>
                        <DashboardRoutes /> 
                    </PrivateRoute>    
                    } 
                />
            </Routes>
            
        </BrowserRouter>
    )
}
