import { Heart, MapPin, Smile, Shield, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "How We Met",
    description: "In 2019, in a simple classroom, I noticed a passionate software developer who inspired me from afar. What started as quiet admiration slowly turned into a life-changing connection — the beginning of everything.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Our First Date",
    description: "In a quiet corner of The Coffee Bean & Tea Leaf cafe, we found each other again after five years. Time had passed, but the feeling hadn’t. As we shared the stories of our unseen days, every word felt like a heartbeat bringing us closer.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Fun Moments Together",
    description: "From spontaneous adventures to lazy Sundays, every moment with you is my favorite memory. Your laugh is my favorite sound, and making you smile is my favorite achievement.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Hard Times We Survived",
    description: "Life isn't always easy, but having you by my side makes everything bearable. Through every storm, we held on tighter. We proved that together, we can overcome anything.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Why I Love You",
    description: "For your kindness, your patience, your beautiful soul. For the way you see the best in me when I can't see it myself. For being my home, my peace, my everything.",
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 md:gap-8 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline line and dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
        {index < timelineItems.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20"></div>
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 glass-card p-6 md:p-8 transition-all duration-700 ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
            {item.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
            {item.title}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const OurStorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="story">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every love story is beautiful, but ours is my favorite
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 md:space-y-0">
          {timelineItems.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
