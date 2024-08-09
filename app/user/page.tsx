import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   next: { revalidate: 10  },
  // });
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {});
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const uses: User[] = await res.json();

  return (
    <>
      <h1>UserPage</h1>
      <div>{new Date().toISOString()}</div>
      <ul>
        {uses.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
