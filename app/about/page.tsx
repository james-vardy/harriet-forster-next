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

export default async function Page() {
  const bio = await getBio();

  return (
    <main>
      <div className="flex justify-center mx-4 my-4 lg:mx-20 lg:my-20">
        <p className=" text-center max-w-4xl text-lg lg:text-2xl text-slate-900">
          {bio.data.attributes.text} this is the develop site!!!
        </p>
      </div>
    </main>
  );
}
