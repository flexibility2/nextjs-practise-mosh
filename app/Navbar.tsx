"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-400 p-5 space-x-3">
      <Link className="mr-5" href={"/"}>
        Next.js
      </Link>
      <Link href={"/user"}>UserPage</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && <div>{session.user?.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
