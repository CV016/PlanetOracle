// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            PlanetOracle offers you unlimited access to a personalized world map
            that chronicles every city you’ve visited. Easily document your
            travels, revisit your cherished memories, and impress your friends
            by sharing your global adventures. Join us and make your journey
            unforgettable.
          </p>
        </div>
        <img src="img2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
