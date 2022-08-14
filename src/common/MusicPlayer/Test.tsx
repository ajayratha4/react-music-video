import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(
    new Audio("https://www.computerhope.com/jargon/m/example.mp3")
  );
  //   useEffect(() => {
  //     debugger;
  //     audioRef.current.play();
  //   }, [audioRef.current]);
  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  return <div onClick={() => setPlaying(true)}>hello</div>;
};

export default AudioPlayer;
