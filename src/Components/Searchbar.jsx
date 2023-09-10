import React, { useContext } from 'react';
import './Searchbar.css';
import { MyContext } from '../Contexts/ProductsContext';
import SearchPage from './SearchPage';

const Searchbar = () => {
  
  const {setSearch,} = useContext(MyContext);
 

  return (
    <div className="search-bar">
      <input
      
      // onChange={(e)=>setSearch(e.target.value)}
        type="search"
        className="search-input"
        placeholder='Search Items'
      

      />
      <button className="search-button" >
      🔍
      </button>



{/* <SearchPage/> */}
  




    </div>
  );
};

export default Searchbar;
