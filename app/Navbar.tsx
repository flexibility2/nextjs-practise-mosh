import Link from "next/link";
import React, { ReactNode } from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-400 p-5 space-x-3">
      <Link className="mr-5" href={"/"}>
        Next.js
      </Link>
      <Link href={"/user"}>UserPage</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default Navbar;
