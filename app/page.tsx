import { Source_Sans_Pro } from "@next/font/google";
const sourceSansPro = Source_Sans_Pro({ weight: "300", subsets: ["latin"] });

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
    <main className={sourceSansPro.className}>
      <div className="px-4 py-2">
        <div className="flex justify-center">
          <video autoPlay className="">
            <source
              src={`https://edit.harrietforster.com${coverVideo.data.attributes.video.data.attributes.url}`}
            />
          </video>
        </div>
      </div>
    </main>
  );
}
