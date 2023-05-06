import { Link } from 'react-router-dom';
import style from './Card.module.css'
import Male from './male.svg'
import Female from './female.svg'
import Genderless from './genderless.png'
import unknown from './unknown.svg'

const genderSign = {Male, Female, Genderless, unknown};

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <article className={style.container}>
         <div>
         <button className={style.btnCierre} onClick={()=>{onClose(id)}}></button>
         <img className={style.genderSign} src={genderSign[gender]} alt='' />
         <Link to={`/Detail/${id}`}> 
            <p className={style.nombre}>{name}</p>
         </Link>
         </div>
         <img className={style.imageCard} src={image} alt='' />
         <div className={style.descripcion}>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin.name}</p>
         </div>
      </article>
   );
}