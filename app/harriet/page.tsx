import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";

async function getPosts() {
  const res = await fetch(
    "https://edit.harrietforster.com/api/posts?populate=*"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const posts: posts = await getPosts();

  return (
    <main>
      <NavBar />
      <ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-8">
          {posts &&
            posts.data.map((post: post) => (
              <li key={post.id} className="px-4 py-4">
                <Link href={`/harriet/${post.id}`}>
                  <Image
                    src={`https://edit.harrietforster.com${post.attributes.images.data[0].attributes.url}`}
                    alt={"image"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  ></Image>
                </Link>
              </li>
            ))}
        </div>
      </ul>
    </main>
  );
}
