import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

const FinalMessageSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden" id="final">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-float opacity-20">
          <Heart className="w-20 h-20 text-primary fill-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow opacity-20">
          <Heart className="w-16 h-16 text-accent fill-accent" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-sparkle opacity-30">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main message */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-relaxed mb-8">
            Thank you for being my{" "}
            <span className="text-primary">safe place</span>,{" "}
            my greatest <span className="text-primary">adventure</span>,{" "}
            and my forever <span className="text-primary">home</span>.
          </p>

          {/* Question */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up animation-delay-400">
            Will you be my Valentine?
          </p>

          {/* Heart button */}
          <button
            onClick={handleClick}
            className={`group relative transition-all duration-500 ${
              isClicked ? "scale-125" : "hover:scale-110"
            }`}
          >
            <div
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
                isClicked
                  ? "bg-primary shadow-2xl shadow-primary/50"
                  : "bg-secondary hover:bg-primary/20"
              }`}
            >
              <Heart
                className={`w-12 h-12 md:w-16 md:h-16 transition-all duration-500 ${
                  isClicked
                    ? "text-primary-foreground fill-primary-foreground animate-heartbeat"
                    : "text-primary fill-primary group-hover:scale-110"
                }`}
              />
            </div>

            {/* Sparkle effects on click */}
            {isClicked && (
              <>
                <div className="absolute -top-4 -left-4 animate-sparkle">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute -top-2 -right-6 animate-sparkle animation-delay-200">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-6 animate-sparkle animation-delay-400">
                  <Sparkles className="w-5 h-5 text-soft-red" />
                </div>
                <div className="absolute -bottom-2 -right-4 animate-sparkle animation-delay-600">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
              </>
            )}
          </button>

          {/* Response after click */}
          {isClicked && (
            <div className="mt-12 animate-fade-in-up">
              <p className="text-2xl md:text-3xl font-serif text-primary mb-4">
                I knew you would! 💕
              </p>
              <p className="text-lg text-muted-foreground">
                Happy Valentine's Day, my love. Here's to us, forever and always.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ By Chan
        </p>
      </div>
    </section>
  );
};

export default FinalMessageSection;
