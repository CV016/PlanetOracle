import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Explore the world.
          <br />
          PlanetOracle Archive your Voyages.
        </h1>
        <h2>
          This interactive world map keeps a record of every city you've
          visited, ensuring your cherished memories are never forgotten.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
