import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="px-16 text-center">We are the most straight forward URL shortener in the world. Most of the URL Shortnes will track you and will ask you for your details for login. we understand your needs and hence we created this URL shortener.</p>
          <div className="flex gap-12 justify-start">
            <Link href="/shorten" className="rounded px-3 py-1 text-sm font-medium text-white  bg-black hover:text-black scale-150 hover:bg-white transition-colors cursor-pointer">Try Now</Link>
            <Link href="/github" className="rounded border border-white px-3 py-1 text-sm font-medium text-white bg-black hover:text-black scale-150 hover:bg-white transition-colors cursor-pointer">GitHub</Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="Vector" fill={true} />
        </div>
      </section>
    </main>
  );
}
