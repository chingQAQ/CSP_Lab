import Head from 'next/head'
import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function CSP() {
  return (
    <>
      <Head>
        <title>CSP Lab - CSP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.main__s} ${inter.className}`}>
        <h1>Directive</h1>
        <ul className={styles.grid}>
          <li className={styles.card}>
            <Link href="csp/default-src">
              <h2>
                default-src <span>-&gt;</span>
              </h2>
              <p>預設值</p>
            </Link>
          </li>
          <li className={styles.card}>
            <Link href="csp/script-src">
              <h2>
                script-src <span>-&gt;</span>
              </h2>
              <p>管理 JavaScript</p>
            </Link>
          </li>
          <li className={styles.card}>
            <Link href="csp/font-src">
              <h2>
                font-src <span>-&gt;</span>
              </h2>
              <p>管理 Font Source</p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}