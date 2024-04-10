import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from "../../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { s = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName( s );

  const { searchText, onInputChange } = useForm({
    searchText: s,
  });
  
  const showSearch = ( s.length === 0 );
  const showError = ( s.length > 0 && heroes.length === 0);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    
    const searchQuery = searchText.toLowerCase().trim();
    
    // if (searchQuery.length < 1) return;
    
    navigate(`?s=${searchQuery}`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {
            (showSearch) ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div> : <></>
          }
          
          {
            (showError) ? <div className="alert alert-danger animate__animated animate__fadeIn">There is no results with '{ s }'.</div> : <></>
          }
          
          { 
            heroes.map( 
              hero => <HeroCard key={ hero.id } { ...hero } /> 
            )
          }

        </div>
      </div>
    </>


  )
}
