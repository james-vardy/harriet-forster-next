import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

async function getCollections() {
  const res = await fetch(
    "https://edit.harrietforster.com/api/collections?populate=*"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCollection(id: string) {
  const res = await fetch(
    `https://edit.harrietforster.com/api/collections/${id}?populate=*`
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
  const { id } = params;
  const collection: collectionResponse = await getCollection(id);

  return (
    <main>
      <ul>
        {collection &&
          collection.data.attributes.images.data.map((image: image) => (
            <li className="flex justify-center" key={image.id}>
              <Image
                src={`https://edit.harrietforster.com${image.attributes.url}`}
                alt={"image"}
                height={image.attributes.height}
                width={image.attributes.width}
                className="w-1/2 max-w-4xl h-auto px-6 py-6"
              ></Image>
            </li>
          ))}
      </ul>
    </main>
  );
}

export async function generateStaticParams() {
  const collections: collections = await getCollections();

  return collections.data.map((collection: collection) => ({
    id: collection.id.toString(),
  }));
}
