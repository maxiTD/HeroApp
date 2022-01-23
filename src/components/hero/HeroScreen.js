import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";


export const HeroScreen = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    //memorizar el heroe para que solo se vuelva a llamar a @getHeroById si es que cambia el id
    const hero = useMemo( () => getHeroById( id ), [ id ] );

    //si no existe heroe con ese id, se redirecciona al inicio
    if ( !hero ) {
        return <Navigate to='/' />
    }

    const {
        heroId = id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/${heroId}.jpg`;

    const handleReturn = () => {
        //regresar a la pagina anterior en el history
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__bounce animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__bounce animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
                    <li className="list-group-item"> <b>First Appearance:</b> { first_appearance } </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
