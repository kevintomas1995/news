import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container-backgroundImg">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js news app</h1>
        <h3>Get the latest news articles</h3>
        <p>Made by Kevin</p>
      </div>
    </div>
  );
}
