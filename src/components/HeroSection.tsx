import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative romantic-gradient overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-10 animate-sparkle">
        <Sparkles className="w-6 h-6 text-primary/60" />
      </div>
      <div className="absolute top-32 right-20 animate-sparkle animation-delay-400">
        <Sparkles className="w-8 h-8 text-accent/50" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-sparkle animation-delay-800">
        <Sparkles className="w-5 h-5 text-primary/40" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-sparkle animation-delay-600">
        <Sparkles className="w-7 h-7 text-soft-red/50" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated heart */}
        <div className="mb-8 animate-heartbeat">
          <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary fill-primary" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6 animate-fade-in-up">
          To My Favorite Person{" "}
          <span className="inline-block animate-heartbeat">❤️</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          A little corner of the internet made just for you
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
