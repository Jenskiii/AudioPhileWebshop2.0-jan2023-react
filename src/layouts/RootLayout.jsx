import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyMission } from "../components/CompanyMission/CompanyMission";
import styles from "./RootLayout.module.css"

export function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  // used to show/hide component based on page
  const currentPage = window.location.href
  const checkoutPage = "http://localhost:5173/checkout"
  return (
    <>
      <Header />

      <ScrollRestoration />
      <div className={`${isLoading ? styles.loading : ""}  ${styles.container} `}>
        <Outlet />
      </div>

      {/* hides mission on checkout page */}
      {currentPage !== checkoutPage && <CompanyMission/>}
      <Footer />
    </>
  );
}
