import Songs from "./components/Songs/Songs";
import Singer from "./components/Singer/Singer";
import NotFound from "./components/NotFound/NotFound";

const router = [
  { path: "/", element: <Songs /> },
  { path: "/Singer", element: <Singer /> },
  { path: "*", element: <NotFound /> },
];
export default router;
