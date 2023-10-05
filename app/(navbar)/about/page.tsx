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
      <div className="flex flex-col mx-4 my-4 lg:mx-20 lg:my-20">
        <div>
          <p className="max-w-4xl text-lg lg:text-2xl text-slate-900">
            {bio.data.attributes.text}
          </p>
        </div>
        <div className="mt-8">
          <p className="max-w-4xl text-lg lg:text-2xl text-slate-900">
            Contact me at:{" "}
            <Link
              href={`mailto:${email.data.attributes.email}`}
              target="_blank"
              className="text-cyan-900 hover:text-cyan-700"
            >
              {email.data.attributes.email}
            </Link>
          </p>
          <p className="max-w-4xl text-lg lg:text-2xl text-slate-900">
            Instagram:{" "}
            <Link
              href={`${instagram.data.attributes.link}`}
              target={"_blank"}
              className="text-cyan-900 hover:text-cyan-700"
            >
              @{instagram.data.attributes.link.split("/")[3]}
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <p className="max-w-4xl text-lg lg:text-2xl text-slate-900">
            Download my{" "}
            <Link
              target={"_blank"}
              href={`https://edit.harrietforster.com/uploads/Harriet_Forster_CV_52d1c49c99.pdf`}
              className="text-cyan-900 hover:text-cyan-700"
            >
              CV
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
