import React from "react";

type Props = {
  gallery: string[];
};

let myArray = Array.from({ length: 9 }, (_, index) => index + 1);

const WorkGallery = ({ gallery }: Props) => {
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-8">
      {gallery.length > 1 &&
        gallery.map((image, i) => {
          const img = `https://drive.google.com/uc?export=view&id=${
            image?.match(/\/d\/([^/]+)\//)![1]
          }`;
          return (
            <img
              src={img}
              className="w-full h-[400px] md:h-[580px] object-cover"
              key={i}
              alt=""
            />
          );
        })}
    </div>
  );
};

export default WorkGallery;
