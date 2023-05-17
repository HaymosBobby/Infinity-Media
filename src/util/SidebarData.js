import PostAddIcon from '@mui/icons-material/PostAdd';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

export const sideBarEditData = [
  {
    path: "/imedia-admin/dashboard/add-posts",
    name: "Add Posts",
    icon: <PostAddIcon />
  },
  {
    path: "/imedia-admin/dashboard/add-podcasts",
    name: "Add Podcasts",
    icon: <PodcastsIcon />
  },
  {
    path: "/imedia-admin/dashboard/add-programs",
    name: "Add Programs",
    icon: <LibraryAddIcon />
  },
]

export const sideBarViewData = [
  {
    path: "/imedia-admin/dashboard/all-posts",
    name: "Posts",
    icon: <LibraryBooksIcon />
  },
  {
    path: "/imedia-admin/dashboard/all-podcasts",
    name: "Podcasts",
    icon: <BroadcastOnPersonalIcon />
  },
  {
    path: "/imedia-admin/dashboard/all-programs",
    name: "Programs",
    icon: <AutoAwesomeMotionIcon />
  },
]