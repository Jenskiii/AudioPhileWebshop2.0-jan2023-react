import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyMission } from "../components/CompanyMission/CompanyMission";
import styles from "./RootLayout.module.css";
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal/Modal";

export function RootLayout() {
  // used to show/hide component based on page
  const checkoutPage = "http://localhost:5173/checkout";
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  // updates page url
  useEffect(() => {
    if (currentPage !== location) setCurrentPage(window.location.href);
  }, [location]);

  // values toggle cart and modal
  const [hamburgerMenu, toggleHamburgerMenu] = useState(false);
  const [cartMenu, toggleCartMenu] = useState(false);
  return (
    <>
      <Modal
        hamburgerMenu={hamburgerMenu}
        toggleHamburgerMenu={toggleHamburgerMenu}
        toggleCartMenu={toggleCartMenu}
        cartMenu={cartMenu}
        className={styles.modal}
      />

      {/* header */}
      <Header
        hamburgerMenu={hamburgerMenu}
        toggleHamburgerMenu={toggleHamburgerMenu}
        cartMenu={cartMenu}
        toggleCartMenu={toggleCartMenu}
      />
      <ScrollRestoration />

      {/* body */}
      <div className={styles.layout}>
        <Outlet />
      </div>

      {/* hides mission on checkout page */}
      {currentPage !== checkoutPage && <CompanyMission />}
      {/* footer */}
      <Footer />
    </>
  );
}
