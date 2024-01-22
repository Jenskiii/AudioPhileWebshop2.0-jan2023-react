import { CompanyLogo } from "../../svg/Symbols";
import { HamburgerButton } from "../Button/Button";
import { Cart, CartButton } from "../Cart/Cart";
import { Nav, MobileNav } from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Header({
  hamburgerMenu,
  toggleHamburgerMenu,
  cartMenu,
  toggleCartMenu,
}) {
  // used to show/hide component based on page
  const homePage = "http://localhost:5173/home";
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  // updates page url
  useEffect(() => {
    if (currentPage !== location) setCurrentPage(window.location.href);
  }, [location]);
  return (
    <header className={styles.header}>
      <div className="container">
        {/* content */}
        <div className={`${styles.container}`}>
          <HamburgerButton
            isActive={hamburgerMenu}
            toggleActive={toggleHamburgerMenu}
            closeCart={toggleCartMenu}
          />
          <CompanyLogo className={styles.logo} />
          <Nav className={styles.nav} />
          <CartButton
            toggleCart={toggleCartMenu}
            closeHamburger={toggleHamburgerMenu}
          />
          {/* border bottom */}
          <div
            className={`${styles.border} ${
              currentPage !== homePage ? "hide" : ""
            }`}
          ></div>
        </div>
        <Cart cartMenu={cartMenu} toggleCartMenu={toggleCartMenu} />
      </div>
      {/* cart + mobile nav + modal */}
      <MobileNav
        hamburgerMenu={hamburgerMenu}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
    </header>
  );
}
