import Image from "next/image";
import Link from "next/link";

async function getPost(id: string) {
  const res = await fetch(
    `https://edit.harrietforster.com/api/posts/${id}?populate=*`
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
  const post: postResponse = await getPost(id);

  return (
    <main>
      <h1 className="text-4xl py-4 px-8">{post.data.attributes.title}</h1>
      <Link
        href="/harriet"
        className="text-xs sm:text-sm py-2 px-16 text-blue-800"
      >
        {"<- back to main page"}
      </Link>
      <p className="py-4 px-12">{post.data.attributes.description}</p>

      <ul>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-8">
          {post &&
            post.data.attributes.images.data.map((image: image) => (
              <li className="px-4 py-4" key={image.id}>
                <Image
                  src={`https://edit.harrietforster.com${image.attributes.url}`}
                  alt={"image"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                ></Image>
              </li>
            ))}
        </div>
      </ul>
    </main>
  );
}
