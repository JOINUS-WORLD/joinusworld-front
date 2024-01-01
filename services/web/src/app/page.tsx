import Link from "next/link";

import Loading from "./Loading";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/test">test</Link>
      <Loading />
    </div>
  );
}
