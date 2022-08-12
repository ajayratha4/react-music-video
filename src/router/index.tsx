/* eslint-disable react/react-in-jsx-scope */

import { RouteObject } from "react-router-dom";
import About from "screen/About";
import NotFound from "screen/Error/NotFound";
import Home from "screen/Home";
import Music from "screen/Music";
import Album from "screen/Music/Album";
import AllMusic from "screen/Music/AllMusic";
import Channel from "screen/Music/Channel";
import MyMusic from "screen/Music/MyMusic";
import NewSongs from "screen/Music/NewSongs";
import OldSongs from "screen/Music/OldSongs";
import TrendingSongs from "screen/Music/TrendingSongs";
import Profile from "screen/Profile";
import Video from "screen/Video";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const routesConfig: RouteObject[] = [
  {
    element: <NotFound />,
    path: "*",
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/music/all-music",
        element: <AllMusic />,
      },
      {
        path: "/music/trending-songs",
        element: <TrendingSongs />,
      },
      {
        path: "/music/new-songs",
        element: <NewSongs />,
      },
      {
        path: "/music/old-songs",
        element: <OldSongs />,
      },
      {
        path: "/music/channel",
        element: <Channel />,
      },
      {
        path: "/music/album",
        element: <Album />,
      },
      {
        path: "/music/my-music",
        element: <MyMusic />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];
