import Image from "next/image";
import Link from "next/link";

export default function Home() {
	console.log("Home Component");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
			<h1>Home</h1>
    </div>
  );
}
