import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";


export default function Nav({ onSearch }) {
  return (
    <div className={style.navBar}>
        <ul className={style.navLinks}>
            <NavLink to="/Home">
                <button className={style.navLinkBtn}>Home</button>
            </NavLink>
            <NavLink to="/About">
                <button className={style.navLinkBtn}>About</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button className={style.navLinkBtn}>Favorites</button>
            </NavLink>
        </ul>
        <SearchBar onSearch={onSearch} className={style.searchBar}/>
    </div>
  );
}
