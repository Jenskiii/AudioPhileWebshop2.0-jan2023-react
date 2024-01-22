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

export function ModalWithContent({ className, children }) {
  return (
    <div id="myModal" className={`${styles.modalWithContent}`}>
      <div className={`${styles.content} ${className}`}>{children}</div>
    </div>
  );
}
