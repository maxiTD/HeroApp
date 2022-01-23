import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../hero/HeroCard";
import { getHeroesByName } from "../../helpers/getHeroesByName";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    //parsear la información del URL
    const { q = '' } = queryString.parse( location.search );

    const [formValues, setValues] = useState({
        searchText: q
    });

    const handleInputChange = ({ target }) => {
        setValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const { searchText } = formValues;
    //memorizar los resultados de la consulta para que sólo se ejecute cuando cambia el query
    const heroesFiltered = useMemo( () => getHeroesByName(q), [q] );
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }
    

    return (
        <>
            <h1>Búsqueda</h1>
            <hr/>

            <div className="row animate__animated animate__bounce animate__fadeIn">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Ingrese el héroe a buscar..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        ( q === '' ) 
                        ? <div className="alert alert-info animate__delay-2s">Aquí aparecerán los resultados</div>
                        : ( heroesFiltered.length === 0 ) && <div className="alert alert-danger animate__delay-2s">No se han encontrado resultados</div>


                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}