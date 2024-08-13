import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: string };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log("searchParams", sortOrder);
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   next: { revalidate: 10  },
  // });
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {});

  return (
    <>
      {/* <h1>UserPage</h1>
      <div>{new Date().toISOString()}</div>
      <ul>
        {uses.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}

      <h1>UserPage</h1>
      {/* <div>{new Date().toISOString()}</div> */}
      <Link href={"/user/new"} className="btn">
        NEW USER
      </Link>
      <UserTable sortOrder={sortOrder}></UserTable>
    </>
  );
};

export default UserPage;
