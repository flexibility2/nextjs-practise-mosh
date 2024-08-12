import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const uses: User[] = await res.json();
  const sortUsers = sort(uses).asc((u) =>
    sortOrder === "name" ? u.name : u.email
  );
  return (
    <table className="table table-md">
      <thead>
        <tr>
          <th>id</th>
          <th>
            <Link href={"user?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"user?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortUsers.map((user) => (
          <tr key={user.id} className="hover">
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
