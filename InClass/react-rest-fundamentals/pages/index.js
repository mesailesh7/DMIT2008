import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AppBar } from "@mui/material/AppBar";
import { Box } from "@mui/material/Box";
import { Button } from "@mui/material";

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
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      ></div>
    </>
  );
}
