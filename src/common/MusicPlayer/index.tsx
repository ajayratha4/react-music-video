import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudioPlayer, setModal, SettingsSlice } from "redux/settings";
import Modal from "common/Modal";
import FullScreenAudioPlayer from "./FullScreenAudioPlayer";
import AudioPlayer from "./AudioPlayer";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const handleMusicPlayer = () => {
    dispatch(setAudioPlayer(false));
  };

  const handlefullScreen = () => {
    dispatch(setModal(true));
  };

  const handleClose = () => {
    dispatch(setModal(false));
  };

  const modal = useSelector((state: SettingsSlice) => state.settings.modal);

  const audioRef = useRef(
    new Audio("https://www.computerhope.com/jargon/m/example.mp3")
  );
  const onPlay = () => {
    debugger;
    audioRef.current.play();
    // playing ? audioRef.current.play() : audioRef.current.pause();
  };

  // useEffect(() => {
  //   playing ? audioRef.current.play() : audioRef.current.pause();
  // }, [playing]);

  if (modal) {
    return (
      <Modal fullScreen handleClose={handleClose}>
        <FullScreenAudioPlayer onPlay={onPlay} />
      </Modal>
    );
  } else {
    return (
      <AudioPlayer
        onPlay={onPlay}
        handlefullScreen={handlefullScreen}
        handleMusicPlayer={handleMusicPlayer}
      />
    );
  }
};

export default MusicPlayer;
