import Image from "next/image";
import Link from "next/link";

export default function Home() {
	console.log("Home Component");
  return (
    <div>
      <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
			<h1>Home Development</h1>
    </div>
  );
}
