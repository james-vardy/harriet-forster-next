import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getBio() {
  const res = await fetch("https://strapi.harrietforster.com/api/bio");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type bio = {
  id: number;
  attributes: {
    text: string;
  };
};

export default async function Page() {
  const bio = await getBio();

  return (
    <main>
      <p>{bio.data.attributes.text}</p>
    </main>
  );
}
