import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      {/* <a href="/user">User</a> */}
      <Link href={"/user"}>User</Link>
    </main>
  );
}
