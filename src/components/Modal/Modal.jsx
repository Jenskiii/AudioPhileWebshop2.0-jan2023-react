import styles from "./Modal.module.css";

export function Modal({
  hamburgerMenu,
  cartMenu,
  toggleHamburgerMenu,
  toggleCartMenu,
}) {
  // remove modal on click
  function hideModal() {
    toggleCartMenu(false);
    toggleHamburgerMenu(false);
  }
  return (
    <>
      <div
        className={`${styles.modal} ${
          hamburgerMenu || cartMenu ? styles.active : ""
        }`}
        onClick={() => hideModal()}
      ></div>
    </>
  );
}
