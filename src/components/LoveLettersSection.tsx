import { useState } from "react";
import { Heart, X } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface Letter {
  id: number;
  title: string;
  message: string;
}

const letters: Letter[] = [
  {
    id: 1,
    title: "For When You Need Encouragement",
    message: "My love, you are stronger than you know. Every challenge you face, you overcome with such grace. I believe in you more than words can express. You've got this, and I've got you. Always.",
  },
  {
    id: 2,
    title: "For When You Miss Me",
    message: "Close your eyes and feel my presence. No matter where we are, my heart beats for you. Every thought leads back to you. Soon we'll be together again, and until then, know that you're always in my heart.",
  },
  {
    id: 3,
    title: "Just Because I Love You",
    message: "There's no special occasion, no particular reason—I just wanted to remind you that you're the best thing that ever happened to me. Loving you is the easiest and most beautiful thing I've ever done.",
  },
  {
    id: 4,
    title: "For Our Future",
    message: "I dream about our future together—the adventures we'll have, the home we'll build, the life we'll create. With you, I'm not afraid of tomorrow because I know it's going to be beautiful. You are my forever.",
  },
];

const Envelope = ({ letter, index }: { letter: Letter; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <>
      {/* Envelope Card */}
      <div
        ref={ref}
        className={`cursor-pointer transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onClick={() => setIsOpen(true)}
      >
        <div className="glass-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          {/* Envelope top flap */}
          <div className="relative mb-4">
            <div className="w-full h-16 bg-secondary rounded-t-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blush/50 to-secondary"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-card transform origin-bottom group-hover:scale-y-90 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Heart seal */}
          <div className="flex justify-center -mt-8 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:animate-heartbeat">
              <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
          </div>

          <h3 className="text-center font-serif text-lg text-foreground group-hover:text-primary transition-colors">
            {letter.title}
          </h3>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Click to open
          </p>
        </div>
      </div>

      {/* Letter Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-card max-w-lg w-full rounded-2xl p-8 shadow-2xl animate-scale-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="text-center mb-6">
              <Heart className="w-8 h-8 mx-auto text-primary fill-primary animate-heartbeat" />
            </div>

            <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-6">
              {letter.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-center italic">
              "{letter.message}"
            </p>

            <div className="text-center mt-8">
              <p className="font-serif text-primary">With all my love,</p>
              <p className="font-serif text-lg text-foreground">Chan ❤️</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LoveLettersSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-background" id="letters">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Love Letters
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Words from my heart to yours, sealed with love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {letters.map((letter, index) => (
            <Envelope key={letter.id} letter={letter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLettersSection;
