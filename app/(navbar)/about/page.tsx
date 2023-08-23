import Link from "next/link";

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

async function getEmail() {
  const res = await fetch("https://edit.harrietforster.com/api/email");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getInstagram() {
  const res = await fetch("https://edit.harrietforster.com/api/instagram");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const bio: bio = await getBio();
  const email: email = await getEmail();
  const instagram: instagram = await getInstagram();

  return (
    <main>
      <div className="flex justify-center mx-4 my-4 lg:mx-20 lg:my-20">
        <p className=" text-center max-w-4xl text-lg lg:text-2xl text-slate-900">
          {bio.data.attributes.text}
        </p>
        <p className=" text-center max-w-4xl text-lg lg:text-2xl text-slate-900">
          Email me at:{" "}
          <Link href={`mailto:${email.data.attributes.email}`} target="_blank">
            {email.data.attributes.email}
          </Link>
        </p>
        <p className=" text-center max-w-4xl text-lg lg:text-2xl text-slate-900">
          Check out my Instagram:{" "}
          <Link href={`${instagram.data.attributes.link}`}>
            @{instagram.data.attributes.link.split("/")[3]}
          </Link>
        </p>
      </div>
    </main>
  );
}
