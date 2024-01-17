import PostAddIcon from "@mui/icons-material/PostAdd";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import BroadcastOnPersonalIcon from "@mui/icons-material/BroadcastOnPersonal";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import {
  AccountCircleOutlined,
  ExitToApp,
  InsertChart,
  NotificationsNone,
  PersonOutline,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
} from "@mui/icons-material";

export const sideBarEditData = [
  {
    path: "/imedia-admin/dashboard/add-posts",
    name: "Add Posts",
    icon: <PostAddIcon />,
  },
  {
    path: "/imedia-admin/dashboard/add-podcasts",
    name: "Add Podcasts",
    icon: <PodcastsIcon />,
  },
  {
    path: "/imedia-admin/dashboard/add-programs",
    name: "Add Programs",
    icon: <LibraryAddIcon />,
  },
];

export const sideBarViewData = [
  {
    path: "/imedia-admin/dashboard/users",
    name: "Users",
    icon: <PersonOutline />,
  },
  {
    path: "/imedia-admin/dashboard/all-posts",
    name: "Posts",
    icon: <LibraryBooksIcon />,
  },
  {
    path: "/imedia-admin/dashboard/all-podcasts",
    name: "Podcasts",
    icon: <BroadcastOnPersonalIcon />,
  },
  {
    path: "/imedia-admin/dashboard/all-programs",
    name: "Programs",
    icon: <AutoAwesomeMotionIcon />,
  },
];

export const sideBarUserData = [
  {
    path: "/imedia-admin/dashboard/profile",
    name: "Profile",
    icon: <AccountCircleOutlined />,
  },
  {
    path: "#",
    name: "Logout",
    icon: <ExitToApp />,
  },
];

export const sideBarServicesData = [
  {
    path: "/imedia-admin/dashboard/system-health",
    name: "System Health",
    icon: <SettingsSystemDaydreamOutlined />,
  },
  {
    path: "/imedia-admin/dashboard/log",
    name: "Log",
    icon: <PsychologyOutlined />,
  },
  {
    path: "/imedia-admin/dashboard/settings",
    name: "Settings",
    icon: <SettingsApplications />,
  },
];

export const sideBarUsefulData = [
  {
    path: "/imedia-admin/dashboard/stats",
    name: "Stats",
    icon: <InsertChart />,
  },
  {
    path: "/imedia-admin/dashboard/notifications",
    name: "Notifications",
    icon: <NotificationsNone />,
  },
];
