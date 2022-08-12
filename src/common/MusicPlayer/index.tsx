import React from "react";
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

  if (modal) {
    return (
      <Modal fullScreen handleClose={handleClose}>
        <FullScreenAudioPlayer />
      </Modal>
    );
  } else {
    return (
      <AudioPlayer
        handlefullScreen={handlefullScreen}
        handleMusicPlayer={handleMusicPlayer}
      />
    );
  }
};

export default MusicPlayer;
