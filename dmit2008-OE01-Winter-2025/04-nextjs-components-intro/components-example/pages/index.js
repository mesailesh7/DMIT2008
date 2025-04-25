import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// our own imports
import Hello from '@/components/Hello'
import NewConcept from '@/components/NewConcept'
import ComponentWrapper from '@/components/ComponentWrapper'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DMIT2008 - React components example</title>
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Hello />
          <ComponentWrapper textColor="pink">
            <NewConcept concept="how to import components" />
            <NewConcept concept="how to pass and use props" />
            <NewConcept concept="how to wrap components inside each other" />
          </ComponentWrapper>
        </main>
      </div>
    </>
  );
}
