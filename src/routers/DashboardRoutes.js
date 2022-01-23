import { Routes, Route} from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";
import { HeroScreen } from "../components/hero/HeroScreen";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { DCScreen } from "../components/dc/dcScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <MarvelScreen /> } />
                    <Route path="dc" element={ <DCScreen /> } />

                    <Route path="search" element={ <SearchScreen /> } />
                    <Route path="hero/:id" element={ <HeroScreen /> } />

                    <Route path="/" element={ <MarvelScreen /> } />
                </Routes>
            </div>
        </>
    )
}
