import styles from "./page.css";
import Weatherdata from "./Weatherdata/Weatherdata.jsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Weather Report</h1>
        <Weatherdata />
      </div>
    </main>
  );
}
