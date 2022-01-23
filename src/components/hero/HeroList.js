import { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {

    //memorizar los heroes para que solo se vuelva a llamar a @getHeroByPublisher si es que cambia el publisher
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__bounce animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
