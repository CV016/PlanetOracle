import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWide by PlanetOracle lets you document your global adventures
            with ease. Our interactive map tracks every city you visit, ensuring
            your memories are beautifully preserved. Share your travel
            experiences with friends and showcase your journey across the world
          </p>
          <p>
            Discover new places, relive past trips, and keep your wanderlust
            alive with WorldWide.
          </p>
        </div>
      </section>
    </main>
  );
}
