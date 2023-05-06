import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

// export default function Nav({ onSearch }) {
//   return (
//     <ul>
//         <li>
//             <button>
//                 <NavLink to="/Home">Home</NavLink>
//             </button>
//         </li>
//         <li>
//             <button>
//                 <NavLink to="/About">About</NavLink>
//             </button>
//         </li>
//         <li>
//             <SearchBar onSearch={onSearch} className={style.searchBar}/>
//         </li>
//     </ul>
//   );
// }
export default function Nav({ onSearch }) {
  return (
    <div className={style.navBar}>
        <ul className={style.navLinks}>
            <NavLink to="/Home">
            <button>Home</button>
            </NavLink>
            <NavLink to="/About">
            <button>About</button>
            </NavLink>
        </ul>
        <SearchBar onSearch={onSearch} className={style.searchBar}/>
    </div>
  );
}
