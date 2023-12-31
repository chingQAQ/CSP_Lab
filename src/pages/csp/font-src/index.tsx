import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function CSP() {
  return (
    <>
      <Head>
        <title>CSP Lab - font-src</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.main__s} ${inter.className}`}>
        <h1>Rules</h1>
        <ul className={styles.grid}>
          <li className={styles.card}>
            <Link href="font-src/none">
              <h2>
                none <span>-&gt;</span>
              </h2>
              <p>不允許任何 font source</p>
            </Link>
          </li>
          <li className={styles.card}>
            <Link href="font-src/origin">
              <h2>
                origin <span>-&gt;</span>
              </h2>
              <p>限制特定 origin font source</p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
