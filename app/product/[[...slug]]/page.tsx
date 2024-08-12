import React from "react";

interface Props {
  params: { slug: string[] };
}

const SlugPage = ({ params: { slug } }: Props) => {
  return <div>SlugPage, {slug ? slug.join(",") : slug}</div>;
};

export default SlugPage;
