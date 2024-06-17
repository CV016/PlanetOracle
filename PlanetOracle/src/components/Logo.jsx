import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      {/* <img src="/logo2.png" alt="WorldWise logo" className={styles.logo} /> */}
      <h2>PlanetOracle</h2>
    </Link>
  );
}

export default Logo;
