import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from "../../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from 'query-string';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { searchText, onInputChange, onFormReset } = useForm({
    searchText: '',
  });

  const { s = '' } = queryString.parse( location.search );
  console.log({ s });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const searchQuery = searchText.toLowerCase().trim();

    if (searchQuery.length < 1) return;

    navigate(`?q=${searchQuery}`);
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

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            There is no results with '{ s }'.
          </div>

          {/* <HeroCard  {...hero} /> */}

        </div>
      </div>
    </>


  )
}
