import Link from "next/link";

import Header from "@/components/Header/Header";

import Loading from "./Loading";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link href="/test">test</Link>
      <Loading />
    </div>
  );
}
