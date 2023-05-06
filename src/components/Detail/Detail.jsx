import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import style from './Detail.module.css'

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
        <article className={style.container}>
            <img src={character.image} alt='' />
            <div>
                <h2>Name: "{character.name && character.name}"</h2>
                <p>Status: "{character.status && character.status}"</p>
                <p>Species: "{character.species && character.species}"</p>
                <p>Gender: "{character.gender && character.gender}"</p>
                <p>Origin: "{character.origin?.name && character.origin?.name}"</p>
            </div>
        </article>
        <button>
        <Link to='/Home'>
            Home
        </Link>
        </button>
    </div>
  );
}
