import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.spinner} aria-label="Cargando" />
        <p className={styles.text}>Cargando...</p>
      </div>
    </div>
  );
}
