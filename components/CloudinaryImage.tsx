import {CldImage} from 'next-cloudinary';
import React  from 'react';
function CloudinaryImage({
    src,
    width,height
}:{
    src:string,
    width:number,height:number
}) {
  return (
    <CldImage
  width={width}
  height={height}
  src={src}
/>
  )
}

export default CloudinaryImage 