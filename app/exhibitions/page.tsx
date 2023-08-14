import Link from "next/link";

async function getExhibitions() {
  const res = await fetch("https://edit.harrietforster.com/api/exhibitions");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const exhibitions: exhibitions = await getExhibitions();

  return (
    <main className="px-8 py-8">
      <div className="flex flex-col justify-center">
        <h2 className="py-4">Upcoming Exhibitions</h2>
        <table className="table-auto order-collapse border border-slate-400 text-xl mb-16">
          <tbody>
            {exhibitions.data.map((exhibition: exhibition) => {
              if (Date.parse(exhibition.attributes.date) > Date.now()) {
                return (
                  <tr className="" key={exhibition.id}>
                    <td className="border border-slate-300 px-8 py-4">
                      <Link href={exhibition.attributes.link} target="_blank">
                        {exhibition.attributes.name} -{" "}
                        {exhibition.attributes.venue}
                      </Link>
                    </td>

                    <td className="border border-slate-300 px-8 py-4">
                      {exhibition.attributes.description}
                    </td>
                    <td className="border border-slate-300 px-8 py-4">
                      {exhibition.attributes.date.toString().split("T")[0]}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>

        <h2 className="py-4">Past Exhibitions</h2>
        <table className="table-auto order-collapse border border-slate-400 text-xl ">
          <tbody>
            {exhibitions.data.map((exhibition: exhibition) => {
              if (Date.parse(exhibition.attributes.date) < Date.now()) {
                return (
                  <tr className="" key={exhibition.id}>
                    <td className="border border-slate-300 px-8 py-4">
                      <Link href={exhibition.attributes.link} target="_blank">
                        {exhibition.attributes.name} -{" "}
                        {exhibition.attributes.venue}
                      </Link>
                    </td>
                    <td className="border border-slate-300 px-8 py-4">
                      {exhibition.attributes.description}
                    </td>
                    <td className="border border-slate-300 px-8 py-4">
                      {exhibition.attributes.date.toString().split("T")[0]}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
