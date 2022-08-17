import React from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import useAxios from "apis/useAxios";
import VerticalMusicCard from "common/MusicCards/VerticalMusicCard";
import { setSonges, SongList } from "common/MusicPlayer/audioSlice";
import { setAudioPlayer } from "redux/settings";
import HorizontalSkeleton from "common/Skeleton/HorizontalSkeleton";

const AllMusic = () => {
  const dispatch = useDispatch();

  const { response = [], loading } = useAxios<SongList[]>("/songs");

  const handleAudioPlayer = (index: number) => {
    dispatch(setAudioPlayer(true));
    dispatch(setSonges({ data: response, index }));
  };

  if (loading) {
    return <HorizontalSkeleton dummyArr={Array.from(Array(35).keys())} />;
  }

  return (
    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
      {response?.map((item, index) => (
        <Box key={item.id}>
          <VerticalMusicCard
            handleonClick={() => handleAudioPlayer(index)}
            songName={item.songName}
            songImage={item.songImage}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AllMusic;
