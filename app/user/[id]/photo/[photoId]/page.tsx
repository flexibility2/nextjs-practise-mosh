import React from "react";

interface Props {
  params: { id: string; photoId: string };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage, id: {id}, phtotID: {photoId}
    </div>
  );
};

export default PhotoPage;
