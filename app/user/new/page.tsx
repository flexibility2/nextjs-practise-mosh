"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const route = useRouter();
  return (
    <button className="btn" onClick={() => route.push("/user")}>
      Create User
    </button>
  );
};

export default NewUserPage;
