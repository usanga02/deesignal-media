import React from "react";

type Props = {
  gallery: string[];
};

let myArray = Array.from({ length: 9 }, (_, index) => index + 1);

const WorkGallery = ({ gallery }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {gallery.map((image, i) => {
        const img = `https://drive.google.com/uc?export=view&id=${
          image.match(/\/d\/([^/]+)\//)![1]
        }`;
        return <img src={img} className="w-full" key={i} alt="" />;
      })}
    </div>
  );
};

export default WorkGallery;
