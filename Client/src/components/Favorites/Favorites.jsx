import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions'

const Favorites = ({myFavorites}) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }


    return (
        <div className={style.divCards}>
            <select onChange={handleOrder}>
                <option value='U'>Orden</option>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='all'>Todos</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            {
                myFavorites?.map((char) => { return (
                    <Card
                        key = {char.id}
                        id ={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin}
                        image={char.image}
                        onClose={char.onClose}
                    />
                )})
            }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)