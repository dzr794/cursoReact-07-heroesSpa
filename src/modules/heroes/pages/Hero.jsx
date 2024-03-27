import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById, getHeroImg } from "../helpers";


export const Hero = () => {

  const {id, ...rest} = useParams();
  const navegate = useNavigate();
  const hero = useMemo( () => getHeroById( id ), [id] );

  const animateDuration = {
    animationDuration: `800ms`,
  }

  const onNavegateBack = () => {
    switch (hero.publisher) {
      case 'Marvel Comics':
        navegate('/marvel');
        break;
      case 'DC Comics':
        navegate('/dc');
        break;
      default:
        navegate(-1);
        break;
    }
  }

  if (!hero) return <Navigate to="/marvel"/>

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={getHeroImg(id)} 
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__zoomInDown"
          style={animateDuration}
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item "> <b>Alter ego:</b> {hero.alterEgo} </li>
          <li className="list-group-item "> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item "> <b>First appearance:</b> {hero.firstAppearance} </li>
        </ul>

        <h5 className="mt-5">Character</h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavegateBack}
        >
          Back
        </button>
      </div>
    </div>
  )
}
