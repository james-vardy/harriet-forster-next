import Link from "next/link";

async function getCoverVideo() {
  const res = await fetch(
    "https://edit.harrietforster.com/api/cover-video?populate=*"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const coverVideo: coverVideo = await getCoverVideo();

  return (
    <main>
      <div>
        <video autoPlay muted>
          <source
            src={`https://edit.harrietforster.com${coverVideo.data.attributes.video.data.attributes.url}`}
          />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="w-100 h-100 bg-slate-50 text-5xl uppercase my-8 text-center">
          Harriet India de Ferranti Forster redeploy
        </div>

        <div className="w-100 h-100 bg-slate-50 text-5xl uppercase my-8">
          <Link href={"/posts"}>enter</Link>
        </div>
      </div>
    </main>
  );
}
