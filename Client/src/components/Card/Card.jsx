import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

  return (
    <article className={style.container}>
      <div>
          <button className={style.favBtn} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
        <button
          className={style.btnCierre}
          onClick={() => {
            onClose(id);
          }}
        ></button>
        <Link to={`/Detail/${id}`}>
          <p className={style.nombre}>{name}</p>
        </Link>
      </div>
      <img className={style.imageCard} src={image} alt="" />
      <div className={style.descripcion}>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>
    </article>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);



