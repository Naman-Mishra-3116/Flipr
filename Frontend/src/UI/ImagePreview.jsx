import React from "react";

const ImagePreview = ({image}) => {
  return (
    <figure className="w-[40px] h-[40px] rounded-full overflow-hidden">
      <img
        src={image}
        alt="Selected file preview"
        className="w-full h-full object-cover"
      />
    </figure>
  );
};

export default ImagePreview;
