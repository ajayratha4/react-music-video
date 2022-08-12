import { SvgIconComponent } from "@mui/icons-material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export type SidebarSubmenu = {
  id: number;
  name: string;
  path?: string;
  icon: SvgIconComponent;
};

export type SidebarItem = {
  id: number;
  name: string;
  path?: string;
  submenu?: SidebarSubmenu[];
};

export const sidebar: SidebarItem[] = [
  { id: 3, name: "Home", path: "/" },
  {
    id: 1,
    name: "Music",
    path: "/music",
    submenu: [
      { id: 100, name: "All", path: "/music/all-music", icon: MusicNoteIcon },
      {
        id: 101,
        name: "Trending Songs",
        path: "/music/trending-songs",
        icon: MusicNoteIcon,
      },
      {
        id: 102,
        name: "New Songs",
        path: "/music/new-songs",
        icon: MusicNoteIcon,
      },
      {
        id: 103,
        name: "Old Songs",
        path: "/music/old-songs",
        icon: MusicNoteIcon,
      },
      {
        id: 104,
        name: "Channel",
        path: "/music/channel",
        icon: MusicNoteIcon,
      },
      { id: 105, name: "Album", path: "/music/album", icon: MusicNoteIcon },
      {
        id: 106,
        name: "My Music",
        path: "/music/my-music",
        icon: MusicNoteIcon,
      },
    ],
  },
  {
    id: 1,
    name: "Video",
    submenu: [
      { path: "/video", id: 110, name: "All", icon: OndemandVideoIcon },
    ],
  },
  {
    id: 1,
    name: "Profile",
    path: "/profile",
  },
  { id: 1, name: "About", path: "/about" },
];
