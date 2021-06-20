import './App.css';
import {Button} from "./Button";
import {Pokemon} from "./Pokemon";
import {useState, useEffect} from "react";


const POKEMONS_PER_PAGE = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonLists, setPokemonLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  function decrementPage(){
    setCurrentPage(currentPage => currentPage - 1);
  }
  function incrementPage(){
    setCurrentPage(currentPage => currentPage + 1);
  }
  useEffect(() => {
    setLoading(true);
    const limit = POKEMONS_PER_PAGE;
    const offset = (currentPage - 1) * limit;
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(pokemons => pokemons.json())
      .then(pokemons => {
        setLoading(false);
        setPokemonLists(pokemons.results);
        setTotalCount(pokemons.count);
      });
  }, [currentPage]);

  const lastPage =  Math.ceil(totalCount / POKEMONS_PER_PAGE);
  const nextButtonDisabled = currentPage === lastPage || loading;
  const prevButtonDisabled = currentPage === 1 || loading;

  return (
    <div className="App">
      <div>Текущая страница {currentPage}</div>
      <div>{loading && "Идет загрузка..."}</div>
      <ul>
        {pokemonLists.map((pokemon, index) => {
        return <Pokemon key={index} name={pokemon.name}/>
      })}
      </ul>
      <Button currentPage={currentPage} disabled={prevButtonDisabled} changePage={decrementPage}>Prev</Button >    
      <Button currentPage={currentPage} disabled={nextButtonDisabled} changePage={incrementPage}>Next</Button >  
    </div>
  );
}

export default App;



