import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Title() {
  return (
    <main className={styles.main}>
      <div>
        <span>
          <Image
            src="./icon/sparkles.svg"
            alt="sparkles"
            width={100}
            height={100}
          />
        </span>
      </div>
      <p className="text-5xl font-bold mb-10">Chat with your data</p>
      <p className="font-bold">asking anything or try an example</p>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <p>
            What is included in my Northwind Health Plus plan that is not in
            standard?
          </p>
        </a>

        <a href="" className={styles.card}>
          <p>What happens in a performance review?</p>
        </a>

        <a href="" className={styles.card}>
          <p>What does a Product Manager do?</p>
        </a>
      </div>
    </main>
  );
}
