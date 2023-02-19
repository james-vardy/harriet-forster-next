import { Inter } from "@next/font/google";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
const inter = Inter({ subsets: ["latin"] });

async function getCollectionPopulated(id: string) {
  const res = await fetch(
    `https://strapi.harrietforster.com/api/collections/${id}?populate=*`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: Params) {
  const collectionPopulated: collectionPopulated = await getCollectionPopulated(
    params.id
  );

  return (
    <main>
      <ul>
        {collectionPopulated &&
          collectionPopulated.attributes.images.data.map((image: image) => (
            <li key={image.id}>
              <p>{image.attributes.url}</p>
            </li>
          ))}
      </ul>
    </main>
  );
}
