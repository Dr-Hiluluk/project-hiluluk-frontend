import React from "react";
import "./RatioImage.scss";
export interface RatioImageProps {
  widthRatio: number;
  heightRatio: number;
  src: string;
  alt?: string;
}

export const RatioImage: React.FC<RatioImageProps> = ({
  widthRatio,
  heightRatio,
  src,
  alt,
}) => {
  const paddingTop = `${(heightRatio / widthRatio) * 100}%`;
  return (
    <div className="ratio-image_block" style={{ paddingTop }}>
      <img alt={alt} src={src} />
    </div>
  );
};
