// import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
const EMAIL = 'franciscopassetti@gmail.com';
const PASSWORD = '1234Asdf';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }

   const navigate = useNavigate()
   const [access, setAccess] = useState(false)

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      if(!access) navigate('/');
    }, [navigate, access]);

   return (
      <div className='App'>
         {pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose}/>
            } />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
      
   );
}

export default App;

