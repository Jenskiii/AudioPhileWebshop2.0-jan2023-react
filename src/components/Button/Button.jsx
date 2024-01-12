import styles from "./Button.module.css";

export function Button({
  className = "",
  AsComponent = "button",
  theme = "",
  ...props
}) {
  return (
    <AsComponent
      className={`${styles.btn} ${styles[theme]} ${className}`}
      {...props}
    />
  );
}

export function HamburgerButton({ isActive,toggleActive,closeCart}) {

  function handleHamburger(){
    toggleActive((prev) => !prev)
    closeCart(false)
  }
  return (
    <button
      aria-label="hamburger navigation"
      className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
      onClick={()=> handleHamburger()}
    ></button>
  );
}
