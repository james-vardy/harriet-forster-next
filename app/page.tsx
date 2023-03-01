import Image from "next/image";
import { Source_Sans_Pro } from "@next/font/google";
import styles from "./page.module.css";

const sourceSansPro = Source_Sans_Pro({ weight: "300" });

export default function Home() {
  return (
    <main className={sourceSansPro.className}>
      <iframe
        src="https://www.youtube.com/embed/Sv7HkLN4T8Q?modestbranding=1&autohide=1&showinfo=0&controls=0
        "
        frameborder="0"
        allowfullscreen
      ></iframe>
    </main>
  );
}
