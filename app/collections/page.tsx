import Image from "next/image";
import Link from "next/link";

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

export default async function Page() {
  const collections: collections = await getCollections();

  return (
    <main>
      <ul>
        {collections &&
          collections.data.map((collection: collection) => (
            <div className="flex justify-center items-center">
              <li key={collection.id}>
                <Link href={`/collections/${collection.id}`}>
                  <div className="relative z-0">
                    <Image
                      src={`https://edit.harrietforster.com${collection.attributes.images.data[0].attributes.url}`}
                      alt={"image"}
                      height={
                        collection.attributes.images.data[0].attributes.height
                      }
                      width={
                        collection.attributes.images.data[0].attributes.width
                      }
                      className="max-w-4xl h-auto px-6 py-6"
                    ></Image>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-100 h-100 bg-slate-50 text-5xl uppercase">
                        {collection.attributes.name}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          ))}
      </ul>
    </main>
  );
}
