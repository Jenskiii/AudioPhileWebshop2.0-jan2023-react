import styles from "./EvenColumns.module.css";
export function EvenColumns({ col1, col2, className, index = 0 }) {
  return (
    <>
      <div className={`${styles.evenColumns} ${className}`}>
        {/* col1 */}
        <div className={`${index % 2 !== 0 ? styles.switchEvenColumns : ""}`}>
          {col1}
        </div>
        {/* col2 */}
        <div>{col2}</div>
      </div>
    </>
  );
}
