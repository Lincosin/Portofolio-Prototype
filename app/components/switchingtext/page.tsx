"use client";

import { useState, useEffect } from 'react';

const texts = [
  'Learning Everything',
  'Loves to Eat',
  'Likes Playing Games',
  'Lives in Indonesia',
  'Listens to Music Everyday',
  'Loves to Read',
  'Loves to Watch Movies',
  'Lonely af mf',
  'Sigmas Skibidi',
];

export default function TextSwitcher() {
  const [displayedText, setDisplayedText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 2) % texts.length);
    }, 5000); // Change text every 3 seconds

    setDisplayedText(texts[textIndex]);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div>
      <h1 className="font-semibold">
        {displayedText}
      </h1>
    </div>
  );
}

