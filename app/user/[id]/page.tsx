import { notFound } from "next/navigation";
import React from "react";
import notFoundInUserPage from "./not-found";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) {
    return notFoundInUserPage();
  }
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
