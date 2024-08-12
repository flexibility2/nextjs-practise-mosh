import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const SlugPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      SlugPage, {slug ? slug.join(",") : slug}, sortOrder: {sortOrder}
    </div>
  );
};

export default SlugPage;
