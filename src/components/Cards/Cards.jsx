import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
      <div className={style.divCards}>
            {
                  characters.map(({id, name, status, species, gender, origin, image}) =>{
                        return(
                              <Card 
                              key={id}
                              id={id}
                              name={name}
                              species={species}
                              status={status}
                              gender={gender}
                              origin={origin}
                              image={image}
                              onClose={onClose}
                              />
                        )
                  })
            }
      </div>);
}