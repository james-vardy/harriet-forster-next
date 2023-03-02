import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getExhibitions() {
  const res = await fetch("https://strapi.harrietforster.com/api/exhibitions");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const exhibitions: exhibitions = await getExhibitions();

  return (
    <main className="px-8 py-8">
      <div className="flex justify-center">
        <table className="table-auto order-collapse border border-slate-400 text-xl ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {exhibitions.data.map((exhibition: exhibition) => {
              return (
                <tr className="">
                  <td className="border border-slate-300 px-8 py-4">
                    {exhibition.attributes.name}
                  </td>
                  <td className="border border-slate-300 px-8 py-4">
                    {exhibition.attributes.location}
                  </td>
                  <td className="border border-slate-300 px-8 py-4">
                    {exhibition.attributes.date.toString().split("T")[0]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
