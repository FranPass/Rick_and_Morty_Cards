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

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const {access} = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

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

