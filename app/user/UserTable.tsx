import React from "react";
interface User {
  id: number;
  name: string;
}
const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const uses: User[] = await res.json();
  return (
    <table className="table table-md">
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
    </table>
  );
};

export default UserTable;
