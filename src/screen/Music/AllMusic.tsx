import { Box } from "@mui/material";
import { Axios } from "apis";
import VerticalMusicCard from "common/MusicCards/VerticalMusicCard";
import { setSonges, SongList } from "common/MusicPlayer/audioSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAudioPlayer } from "redux/settings";

const AllMusic = () => {
  const dispatch = useDispatch();

  const [songList, setSongList] = useState<SongList[]>([]);

  const handleAudioPlayer = (index: number) => {
    dispatch(setAudioPlayer(true));
    dispatch(setSonges({ data: songList, index }));
  };

  useEffect(() => {
    Axios.get<SongList[]>("/songs").then((res) => {
      setSongList(res.data);
    });
  }, []);

  return (
    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
      {songList?.map((item, index) => (
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
