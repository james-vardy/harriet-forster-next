import Image from "next/image";
import { Source_Sans_Pro } from "@next/font/google";
import styles from "./page.module.css";

const sourceSansPro = Source_Sans_Pro({ weight: "300" });

export default function Home() {
  return (
    <main className={sourceSansPro.className}>
      <p>PAGE CONTENT</p>
    </main>
  );
}
