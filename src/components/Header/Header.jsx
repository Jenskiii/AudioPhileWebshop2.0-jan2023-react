import { CompanyLogo } from "../../svg/Symbols";
import { HamburgerButton } from "../Button/Button";
import { Cart, CartButton } from "../Cart/Cart";
import { Nav, MobileNav } from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export function Header() {
  const [hamburgerMenu, toggleHamburgerMenu] = useState(false);
  const [cartMenu, toggleCartMenu] = useState(false);

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
          <div className={styles.border}></div>
        </div>

        {/* cart + mobile nav + modal */}
        <MobileNav
          hamburgerMenu={hamburgerMenu}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />

        <Cart cartMenu={cartMenu} />

        <Modal
          hamburgerMenu={hamburgerMenu}
          toggleHamburgerMenu={toggleHamburgerMenu}
          toggleCartMenu={toggleCartMenu}
          cartMenu={cartMenu}
        />
      </div>
    </header>
  );
}
