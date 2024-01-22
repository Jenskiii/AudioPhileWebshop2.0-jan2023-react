import { Link } from "react-router-dom";
import { productData } from "../../data/productData";
import styles from "./Navigation.module.css";
import { CategoryList } from "../CategoryList/CategoryList";

export function Nav({ className = "" }) {
  return (
    <nav>
      <ul className={`${styles.nav} ${className}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {productData.map((item) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link to={item.category}>{item.category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav({hamburgerMenu,toggleHamburgerMenu}) {
  return (
    <>
      <div className={`${styles.mobileNav} ${hamburgerMenu ? styles.active : ""} | container`}>
        <CategoryList  toggleHamburgerMenu={toggleHamburgerMenu}/>
      </div>
    </>
  );
}
