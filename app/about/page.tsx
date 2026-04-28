import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About",
	description: "About",
};

export default function About() {
	return (
		<div>
			<Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
			<h1>About</h1>
		</div>
	);
}