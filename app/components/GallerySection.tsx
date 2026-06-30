"use client";

import { basePath } from "@/lib/basePath";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title?: string;
};

type GallerySectionProps = {
  title: string;
  description?: string;
  images: GalleryImage[];
};

export function GallerySection({
  title,
  description,
  images,
}: GallerySectionProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((image) => ({
    src: basePath + image.src,
    alt: image.alt,
    title: image.title,
  }));

  return (
    <section className="pt-20">
      <div className="w-4/5 mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((image, imageIndex) => (
            <div key={image.id} className="gallery-card">
              <button
                type="button"
                onClick={() => setIndex(imageIndex)}
                className="gallery-link"
              >
                <Image
                  src={basePath + image.src}
                  alt={image.alt}
                  fill
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h5>{image.title || ""}</h5>
                </div>
              </button>
            </div>
          ))}
        </div>
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
          plugins={[Zoom, Fullscreen, Thumbnails]}
        />
      </div>
    </section>
  );
}
