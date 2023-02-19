import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

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
          collectionPopulated.data.attributes.images.data.map(
            (image: image) => (
              <li className="flex justify-center" key={image.id}>
                <Image
                  src={`https://strapi.harrietforster.com${image.attributes.url}`}
                  alt={"image"}
                  height={image.attributes.height}
                  width={image.attributes.width}
                  className="w-1/2 max-w-4xl h-auto px-6 py-6"
                ></Image>
              </li>
            )
          )}
      </ul>
    </main>
  );
}
