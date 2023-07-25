import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Title(props) {
  return (
    <main className={styles.main}>
      <div>
        <span >
          <Image
            src="..//icon/sparkles.svg"
            alt="sparkles"
            width={100}
            height={100}
            
          />
        </span>
      </div>
      <p className="text-5xl font-bold mb-10 text-black">{props.title} </p>
      <p className="font-bold text-black">{props.subtitle}</p>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <p className="text-black">
          {props.cardfirst}
            
          </p>
        </a>

        <a href="" className={styles.card}>
          <p className="text-black">{props.cardsecond}</p>
        </a>

        <a href="" className={styles.card}>
          <p className="text-black">{props.cardthird}</p>
        </a>
      </div>
    </main>
  );
}
