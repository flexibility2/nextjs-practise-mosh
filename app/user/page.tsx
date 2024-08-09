import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const uses: User[] = await res.json();

  return (
    <>
      <h1>UserPage</h1>
      <ul>
        {uses.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
