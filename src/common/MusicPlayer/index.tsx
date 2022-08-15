import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudioPlayer, setModal, SettingsSlice } from "redux/settings";
import Modal from "common/Modal";
import FullScreenAudioPlayer from "./FullScreenAudioPlayer";
import MinimizeAudioPlayer from "./MinimizeAudioPlayer";
import { Box } from "@mui/system";

import {
  getPercentageToValue,
  getTimeInDurationFormat,
  getValueToPercentage,
} from "utils/date";
import { AudioSlice, changeSong, setVolume } from "./audioSlice";

const MusicPlayer = () => {
  const dispatch = useDispatch();

  const songsList = useSelector((state: AudioSlice) => state.audio.songsList);
  const songsIndex = useSelector(
    (state: AudioSlice) => state.audio.currentIndex
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaybackPercentage, setCurrentPlaybackPercentage] = useState(0);
  const [currentPlayback, setCurrentPlayback] = useState({
    currentTime: 0,
    duration: 0,
  });

  const modal = useSelector((state: SettingsSlice) => state.settings.modal);

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const handleMusicPlayer = () => {
    dispatch(setAudioPlayer(false));
  };

  const handlefullScreen = () => {
    dispatch(setModal(true));
  };

  const handleClose = () => {
    dispatch(setModal(false));
  };

  const resetAudioPlayer = () => {
    setIsPlaying(false);
    setCurrentPlayback({ currentTime: 0, duration: 0 });
    setCurrentPlaybackPercentage(0);
  };

  const handlePlaybackPosition = (value: number) => {
    if (isPlaying) {
      setCurrentPlaybackPercentage(value);

      audioRef.current.currentTime = getPercentageToValue(
        value,
        audioRef?.current?.duration
      );
    }
  };

  const handleVolume = (volume: number) => {
    audioRef.current.volume = volume / 100;
    dispatch(setVolume(volume));
  };

  const onLoadedData = () => {
    const duration = getTimeInDurationFormat(audioRef?.current?.duration);
    const currentTime = getTimeInDurationFormat(audioRef?.current?.currentTime);
    setCurrentPlayback((previousValue) => ({
      ...previousValue,
      currentTime,
      duration,
    }));
    audioRef.current.play();
    setIsPlaying(true);
  };

  const onDurationChange = () => {
    const duration = getTimeInDurationFormat(audioRef?.current?.duration);
    const currentTime = getTimeInDurationFormat(audioRef?.current?.currentTime);

    setCurrentPlaybackPercentage(getValueToPercentage(currentTime, duration));
    setCurrentPlayback((previousValue) => ({
      ...previousValue,
      currentTime,
      duration,
    }));
  };

  const handleOnPlayStartedOrPaused = () => {
    if (audioRef?.current?.duration) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleOnSongEnded = () => {
    if (songsList.length != songsIndex + 1) {
      dispatch(changeSong(songsIndex + 1));
    } else {
      resetAudioPlayer();
    }
  };

  return (
    <Box display="flex" width="100%">
      {modal ? (
        <Modal
          header={songsList[songsIndex].songName}
          fullScreen
          handleClose={handleClose}
        >
          <FullScreenAudioPlayer
            songDetails={songsList[songsIndex]}
            handleVolume={handleVolume}
            currentPlayback={currentPlayback}
            currentPlaybackPercentage={currentPlaybackPercentage}
            handlePlaybackPosition={handlePlaybackPosition}
            onPlay={handleOnPlayStartedOrPaused}
            isPlaying={isPlaying}
            resetAudioPlayer={resetAudioPlayer}
          />
        </Modal>
      ) : (
        <MinimizeAudioPlayer
          songDetails={songsList[songsIndex]}
          handleVolume={handleVolume}
          currentPlayback={currentPlayback}
          currentPlaybackPercentage={currentPlaybackPercentage}
          handlePlaybackPosition={handlePlaybackPosition}
          onPlay={handleOnPlayStartedOrPaused}
          isPlaying={isPlaying}
          handlefullScreen={handlefullScreen}
          handleMusicPlayer={handleMusicPlayer}
          resetAudioPlayer={resetAudioPlayer}
        />
      )}
      <div>
        <audio
          ref={audioRef}
          preload={"metadata"}
          onLoadedData={onLoadedData}
          src={songsList[songsIndex]?.songSource}
          onTimeUpdate={onDurationChange}
          onEnded={handleOnSongEnded}
        />
      </div>
    </Box>
  );
};

export default MusicPlayer;
