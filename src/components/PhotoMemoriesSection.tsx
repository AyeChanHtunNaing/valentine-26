 import { useState } from "react";
 import photo1 from "@/assets/photos/photo1.jpg";
 import photo2 from "@/assets/photos/photo2.jpg";
 import photo3 from "@/assets/photos/photo3.jpg";
 import photo4 from "@/assets/photos/photo4.jpg";
 import photo5 from "@/assets/photos/photo5.jpg";
 import photo6 from "@/assets/photos/photo6.jpg";
import { useInView } from "../hooks/useInView";

interface Photo {
  id: number;
  caption: string;
   image?: string;
   placeholder?: boolean;
}

const photos: Photo[] = [
   { id: 1, caption: "Golden Bridge adventure", image: photo1 },
   { id: 2, caption: "Sweet moments together", image: photo2 },
   { id: 3, caption: "James Bond Island vibes", image: photo3 },
   { id: 4, caption: "Island hopping joy", image: photo4 },
   { id: 5, caption: "Maekampong Waterfall trip", image: photo5 },
   { id: 6, caption: "Lantern festival magic", image: photo6 },
];

const PhotoCard = ({ photo, index }: { photo: Photo; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       {/* Photo or placeholder */}
       {photo.image ? (
         <img
           src={photo.image}
           alt={photo.caption}
           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
             isHovered ? "scale-110" : "scale-100"
           }`}
         />
       ) : (
         <div className="absolute inset-0 bg-blush/50 flex items-center justify-center">
           <span className="text-4xl">📷</span>
         </div>
       )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-primary-foreground font-medium">{photo.caption}</p>
      </div>
    </div>
  );
};

const PhotoMemoriesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 romantic-gradient" id="photos">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Photo Memories
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Moments frozen in time, feelings that last forever
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
         ✨ Our favorite memories together
        </p>
      </div>
    </section>
  );
};

export default PhotoMemoriesSection;
