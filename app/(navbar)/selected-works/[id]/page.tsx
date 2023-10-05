import Image from "next/image";

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

export default async function Page({ params }: { params: { id: string } }) {
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
                className="w-3/4 max-w-6xl h-auto py-6 px-6 lg:px-12 lg:py-12"
              ></Image>
            </li>
          ))}
      </ul>
    </main>
  );
}
