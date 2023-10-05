import Link from "next/link";

async function getProjectsAndResidencies() {
  const res = await fetch(
    "https://edit.harrietforster.com/api/projects-and-residencies"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const projectsAndResidencies: projectsAndResidencies =
    await getProjectsAndResidencies();

  return (
    <main className="px-8 py-8">
      <div className="flex flex-col justify-center">
        <h2 className="py-4">Upcoming Projects and Residencies</h2>
        <table className="table-auto order-collapse border border-slate-400 text-xl mb-16">
          <tbody>
            {projectsAndResidencies.data.map(
              (projectOrResidency: projectOrResidency) => {
                if (
                  Date.parse(projectOrResidency.attributes.date) > Date.now()
                ) {
                  return (
                    <tr className="" key={projectOrResidency.id}>
                      <td className="border border-slate-300 px-8 py-4">
                        <Link
                          href={projectOrResidency.attributes.link}
                          target="_blank"
                        >
                          {projectOrResidency.attributes.name}
                        </Link>
                      </td>

                      <td className="border border-slate-300 px-8 py-4">
                        {projectOrResidency.attributes.description}
                      </td>
                      <td className="border border-slate-300 px-8 py-4">
                        {projectOrResidency.attributes.description}
                      </td>
                    </tr>
                  );
                }
              }
            )}
          </tbody>
        </table>

        <h2 className="py-4">Past Projects and Residencies</h2>
        <table className="table-auto tab order-collapse border border-slate-400 text-xl ">
          <tbody>
            {projectsAndResidencies.data.map(
              (projectOrResidency: projectOrResidency) => {
                if (
                  Date.parse(projectOrResidency.attributes.date) < Date.now()
                ) {
                  return (
                    <tr className="" key={projectOrResidency.id}>
                      <td className="border border-slate-300 px-8 py-4">
                        <Link
                          href={projectOrResidency.attributes.link}
                          target="_blank"
                        >
                          {projectOrResidency.attributes.name}
                        </Link>
                      </td>
                      <td className="border border-slate-300 px-8 py-4">
                        {projectOrResidency.attributes.description}
                      </td>
                      <td className="border border-slate-300 px-8 py-4">
                        {projectOrResidency.attributes.date
                          .toString()
                          .split("T")[0]
                          .split("-")[1] +
                          " - " +
                          projectOrResidency.attributes.date
                            .toString()
                            .split("T")[0]
                            .split("-")[0]}
                      </td>
                    </tr>
                  );
                }
              }
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
