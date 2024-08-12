import React from "react";
import UserTable from "./UserTable";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
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
      <UserTable></UserTable>
    </>
  );
};

export default UserPage;
