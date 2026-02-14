import { Music, Play, Pause, Heart, Volume2 } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useState, useRef, useEffect } from "react";
import { Slider } from "./ui/slider";

interface Song {
  id: number;
  title: string;
  artist: string;
  reason: string;
  audioUrl: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    reason: "Because you are perfect to me, in every single way.",
    audioUrl: "/audio/Perfect.mp3",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    reason: "You love all of me, even the parts I'm still learning to love.",
    audioUrl: "/audio/All_Of_Me.mp3",
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    reason: "I'll love you till we're 70... and beyond.",
    audioUrl: "/audio/Thinking_Out_Loud.mp3",
  },
  {
    id: 4,
    title: "A Thousand Years",
    artist: "Christina Perri",
    reason: "I have loved you for a thousand years, I'll love you for a thousand more.",
    audioUrl: "/audio/A_Thousand_Years.mp3",
  },
  {
    id: 5,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    reason: "Like a river flows to the sea, I was meant to be with you.",
    audioUrl: "/audio/Can_t_Help_Falling_in_Love.mp3",
  },
];

interface SongCardProps {
  song: Song;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const SongCard = ({ song, index, isPlaying, onPlay, onPause }: SongCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <div
      ref={ref}
      className={`glass-card p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-500 group ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${isPlaying ? "ring-2 ring-primary/50 bg-primary/5" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Play button */}
      <button
        onClick={handlePlayPause}
        className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform cursor-pointer ${
          isPlaying ? "animate-pulse" : ""
        }`}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-primary-foreground" />
        ) : (
          <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-foreground truncate">{song.title}</h4>
          <Heart className={`w-4 h-4 text-primary fill-primary flex-shrink-0 ${isPlaying ? "animate-heartbeat" : ""}`} />
        </div>
        <p className="text-sm text-muted-foreground mb-2">{song.artist}</p>
        <p className="text-sm text-muted-foreground/80 italic">"{song.reason}"</p>
      </div>
    </div>
  );
};

const PlaylistSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = (song: Song) => {
    if (audioRef.current) {
      // If same song, just play
      if (currentSongId === song.id) {
        audioRef.current.play();
      } else {
        // New song
        audioRef.current.pause();
        audioRef.current.src = song.audioUrl;
        audioRef.current.play();
        setCurrentSongId(song.id);
      }

      // Handle song end
      audioRef.current.onended = () => {
        setCurrentSongId(null);
      };
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentSongId(null);
    }
  };

  return (
    <section className="py-20 md:py-32 romantic-gradient" id="playlist">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
              Our Playlist
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Songs that tell our story and the reasons they're special
          </p>
        </div>

        {/* Volume Control */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="glass-card p-4 flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-primary flex-shrink-0" />
            <Slider
              value={[volume * 100]}
              onValueChange={(value) => setVolume(value[0] / 100)}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-10 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {songs.map((song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
              isPlaying={currentSongId === song.id}
              onPlay={() => handlePlay(song)}
              onPause={handlePause}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          🎵 Click play to listen to our special songs
        </p>
      </div>
    </section>
  );
};

export default PlaylistSection;
