import { Source_Sans_Pro } from "@next/font/google";
const sourceSansPro = Source_Sans_Pro({ weight: "300", subsets: ["latin"] });

async function getBio() {
  const res = await fetch("https://edit.harrietforster.com/api/bio");
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
    <main className={sourceSansPro.className}>
      <div className="flex justify-center mx-20 my-20">
        <p className=" text-center max-w-4xl text-2xl text-slate-900">
          {bio.data.attributes.text}
        </p>
      </div>
    </main>
  );
}
