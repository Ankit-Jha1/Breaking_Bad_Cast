// import logo from './logo.svg';
import {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/UI/Header';
import CharacterGrid from './Components/Characters/CharacterGrid';
import Search from './Components/UI/Search';

const App = () => {
  const [items,setItems] = useState([]);
  const [isLoading,setisLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data);
      // console.log(result.data)
      setisLoading(false);
    }
    fetchItems();
    // here query is dependency, so whenever it is changed useEffect is reloaded
  },[query])
  
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
