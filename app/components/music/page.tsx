"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showText, setShowText] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        setShowText(true); // Tampilkan teks setelah lagu mulai
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {/* Teks awal */}
      <div className='-mt-[30rem] ml-10 font-light'> 
            are you&nbsp;
        <span 
          className="text-[#186F3B] font-semibold cursor-pointer hover:underline" 
          onClick={togglePlay}
        >
          wanna know?
        </span> &nbsp;🎵
      </div>

      {/* Teks yang muncul setelah lagu dimainkan */}
      {showText && (
        <p 
          className="font-light text-xl flex justify-center align-middle mt-[100px]"
        >
          you are really&nbsp;
          <span className="text-[#186F3B] font-semibold hover:underline cursor-pointer" onClick={togglePlay}>wanna know eh?</span>&nbsp;(dasar kepo)&nbsp;🎵
        </p>
      )}
      {showText && (
        <span className="flex justify-center align-middle font-light text-sm p-5">i don't know, sleep and eat maybe ;)</span>
      )}

      {/* Audio elemen */}
      <audio ref={audioRef} src="/src/music/do i wanna know.mp3" />
    </div>
  );
}
