import { useMemo } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { getHeroImg } from "../helpers";

const CharactersByHero = ({ alterEgo, characters }) => {
    return (alterEgo === characters) ? (<></>) : <p>{ characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters,
    index
}) => {

    const heroImagUrl = useMemo( () => getHeroImg(id), [id] );
    const delayCSS = {
        animationDelay: `${index*20}ms`,
    };
    
    return (
        <div className="col animate__animated animate__fadeIn animate__delay-2s" style={delayCSS}>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroImagUrl} alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="card-title">{superhero}</div>
                            <div className="card-text">{alterEgo}</div>

                            {/* {
                                (alterEgo !== characters) && (<p>{characters}</p>)
                            } */}

                            <CharactersByHero alterEgo={alterEgo} characters={characters} />


                            <div className="card-text">
                                <small className="text-muted">{firstAppearance}</small>
                            </div>
                            
                            <Link to={`/hero/${id}`}>
                                Más información
                            </Link> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
