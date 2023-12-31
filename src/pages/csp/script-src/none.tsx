import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function handleClick() {
  window.location.reload();
}

export default function CSP() {
  return (
    <>
      <Head>
        <title>CSP Lab - script-src/none</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.main__s} ${inter.className}`}>
        <code>
          {`> <meta http-equiv='Content-Security-Policy' content="script-src 'none'" ></meta>`}
        </code>
        <p>Note. script-src * 為相反</p>
        <button onClick={handleClick}>Refresh</button>
      </main>
    </>
  );
}
