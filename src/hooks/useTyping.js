import { useEffect, useState } from 'react';

export function useTyping(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;

    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, typing, wordIndex, words, speed, pause]);

  return display;
}
