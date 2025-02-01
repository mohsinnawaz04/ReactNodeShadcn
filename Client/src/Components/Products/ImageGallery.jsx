import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Assuming you're using a UI library

const ImageGallery = () => {
  const images = [
    "images/products/jacket.png",
    "images/products/pants.png",
    "images/products/phone.png",
    "images/products/shoes.png",
  ];

  const [featuredImage, setFeaturedImage] = useState(images[0]);
  return (
    <div className="gallery max-w-[600px]">
      {/* Featured Image */}
      <div className="featured-image border py-20 rounded-sm">
        <AspectRatio ratio={16 / 9} className="img-wrapper">
          <img src={featuredImage} alt="Featured Product" />
        </AspectRatio>
      </div>

      {/* Image Carousel */}
      <div className="img-carousel mt-5 flex justify-between gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className={`img-wrapper border py-5 w-[180px] h-[120px] rounded-sm hover:cursor-pointer ${
              featuredImage === img && "border-orange-600"
            }`}
            onClick={() => {
              setFeaturedImage(img);
            }}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
