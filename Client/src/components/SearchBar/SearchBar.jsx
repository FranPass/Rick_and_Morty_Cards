import style from './SearchBar.module.css'   
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value) //event.target.value es el input 
   }
   return (
      <div className={style.search} >
         <input type='search' value={id} onChange={handleChange} placeholder='Buscar personaje...' className={style.searchBar}/>
         <button onClick={() => {onSearch(id)}} className={style.searchBtn} ></button>
      </div>
   );
}
