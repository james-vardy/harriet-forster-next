import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

async function getCollections() {
  const res = await fetch("https://strapi.harrietforster.com/api/collections");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const collections: collections = await getCollections();

  return (
    <main>
      <ul>
        {collections &&
          collections.data.map((collection: collection) => (
            <li key={collection.id}>
              <Link href={`/collections/${collection.id}`}>
                {collection.attributes.name}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
