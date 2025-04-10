import { SongsContext, SongsProvider } from "./contexts/SongsContext";
import React, { useContext } from "react";
import Player from "./components/Player/Player";
import Songs from "./components/Songs/Songs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import router from "./routes";

const App = () => {
  const routers = useRoutes(router);
  const { ligthMode, setLigthMode } = useContext(SongsContext);

  return (
    <div
      // style={{ background: ligthMode ? "" : "" }}
      className={`h-screen overflow-hidden ${
        ligthMode ? "bg-[#ebebeb]" : "bg-[#0B1120]"
      } `}
    >
      <Header />
      <Navbar />
      <Player />
      {routers}
    </div>
  );
};

export default App;
