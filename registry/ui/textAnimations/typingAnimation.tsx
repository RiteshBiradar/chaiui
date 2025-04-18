"use client"
import React, { useEffect, useState } from 'react';

type TypingAnimationProps = {
  words: string[];
  typingSpeed?: number;  
  switchDelay?: number;  
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  words,
  typingSpeed = 150,
  switchDelay = 1000,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showText, setShowText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[wordIndex];
    const interval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setShowText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, switchDelay);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [wordIndex, words, typingSpeed, switchDelay]);

  return (
    <div className="text-4xl sm:text-5xl text-white font-normal">
      I'm a{' '}
      <span className="text-[#FC6D6D] font-semibold border-r-2 border-[#FC6D6D] pr-1 animate-blink">
        {showText}
      </span>
    </div>
  );
};

export default TypingAnimation;
