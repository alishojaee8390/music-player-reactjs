import { createContext, useContext, useEffect, useState, useRef } from "react";
import { musicData, singerData } from "../data";
const SongsContext = createContext();

const SongsProvider = ({ children }) => {
  const [ligthMode, setLigthMode] = useState(false);
  const [songs, setSongs] = useState([musicData]);
  const [singer, setSinger] = useState([singerData]);
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);
  const [value, setValue] = useState("");
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0][trackIndex]);
  const [songFilter, setSongFilter] = useState([]);
  const [singerFilter, setSingerFilter] = useState([]);
  const [volume, setVolume] = useState(60);
  const [showVolume, setShowVolume] = useState(false);
  const [infos, setInfos] = useState({
    currentTime: 0,
    durationTime: 0,
  });

  const playSong = () => {
    if (isPlay) {
      audioRef.current.pause();
      setIsPlay(!isPlay);
      currentSong.active = false;
    } else {
      audioRef.current.play();
      setIsPlay(!isPlay);
      currentSong.active = true;
    }
  };

  useEffect(() => {
    setSingerFilter(
      singer[0].filter((item) => {
        if (item.name.toLowerCase().match(value.toLowerCase())) {
          return item;
        }
      })
    );
    setSongFilter(
      songs[0].filter((item) => {
        if (item.name.toLowerCase().match(value.toLowerCase())) {
          return item;
        }
      })
    );
  }, [value]);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setInfos({
      ...infos,
      currentTime: e.target.value,
    });
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const durationTime = e.target.duration;

    setInfos({
      ...infos,
      currentTime,
      durationTime,
    });
  };

  const skipSong = (dir) => {
    if (dir === "next") {
      if (trackIndex >= songs[0].length - 1) {
        setTrackIndex(0);
        setCurrentSong(songs[0][0]);
      } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentSong(songs[0][trackIndex + 1]);
      }
      currentSong.active = false;
      setIsPlay(false);
    }
    if (dir === "prev") {
      console.log(trackIndex);
      if (trackIndex === 0) {
        let lastTrackIndex = songs[0].length - 1;
        setTrackIndex(lastTrackIndex);
        setCurrentSong(songs[0][lastTrackIndex]);
      } else {
        setTrackIndex((prev) => prev - 1);
        setCurrentSong(songs[0][trackIndex - 1]);
      }
      currentSong.active = false;
      setIsPlay(false);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const [loop, setLoop] = useState(false);
  const loopAudio = () => {
    if (audioRef.current.loop === true) {
      audioRef.current.loop = false;
      setLoop(false);
    } else {
      audioRef.current.loop = true;
      setLoop(true);
    }
  };

  return (
    <SongsContext.Provider
      value={{
        songs,
        setSongs,
        singer,
        setSinger,
        isPlay,
        setIsPlay,
        currentSong,
        setCurrentSong,
        value,
        setValue,
        songFilter,
        playSong,
        audioRef,
        singerFilter,
        dragHandler,
        timeUpdateHandler,
        infos,
        ligthMode,
        setLigthMode,
        skipSong,
        showVolume,
        setShowVolume,
        volume,
        setVolume,
        loop,
        loopAudio,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};

export { SongsProvider, SongsContext };
