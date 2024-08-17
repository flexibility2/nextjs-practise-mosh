import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>hello world, {session && <span>{session.user?.name}</span>}</h1>
      {/* <a href="/user">User</a> */}
      <Link href={"/user"}>User</Link>
      <ProductCard />
    </main>
  );
}
