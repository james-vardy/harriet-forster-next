import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { type } from "os";

const inter = Inter({ subsets: ["latin"] });

type params = {
  params: { name: string };
};

export default function Page({ params }) {
  return <div>{params.name}</div>;
}
