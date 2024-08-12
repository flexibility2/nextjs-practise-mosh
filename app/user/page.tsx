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
      {/* <h1>UserPage</h1>
      <div>{new Date().toISOString()}</div>
      <ul>
        {uses.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}

      <h1>UserPage</h1>
      <div>{new Date().toISOString()}</div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {uses.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>

        {/* {uses.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </table>
    </>
  );
};

export default UserPage;
