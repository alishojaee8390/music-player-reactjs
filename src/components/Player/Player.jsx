import React, { useContext, useState } from "react";
import { BsPlay } from "react-icons/bs";
import { PiSkipBackFill, PiSkipForwardFill } from "react-icons/pi";
import { FiRepeat } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { SongsContext } from "../../contexts/SongsContext";
import Button from "../Button/Button";
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";
const Player = () => {
  const {
    isPlay,
    currentSong,
    playSong,
    audioRef,
    dragHandler,
    infos,
    timeUpdateHandler,
    ligthMode,
    skipSong,
    showVolume,
    setShowVolume,
    volume,
    setVolume,
    loopAudio,
    loop,
  } = useContext(SongsContext);

  const timeFormat = (time) => {
    return ` ${Math.floor(time / 60)}  : ${("0" + Math.floor(time % 60)).slice(
      -2
    )}`;
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className=" bg-transparent border-2 border-green-600 p-5 rounded-full  w-[350px] md:w-[700px] md:justify-between  fixed bottom-10 flex flex-col md:flex-row justify-center gap-2  items-center">
        <div className="w-[20%] flex justify-center md:justify-between  gap-5">
          <Button onClick={() => skipSong("prev")}>
            <PiSkipBackFill className="text-2xl" />
          </Button>
          <Button onClick={playSong}>
            {isPlay ? (
              <BsPlay className="text-2xl" />
            ) : (
              <CiPause1 className="text-2xl" />
            )}
          </Button>
          <Button onClick={() => skipSong("next")}>
            <PiSkipForwardFill className="text-2xl" />
          </Button>
          <Button onClick={loopAudio}>
            <FiRepeat className={`text-xl ${loop ? "text-red-800" : ""}`} />
          </Button>
          <div>
            {showVolume && (
              <div className="absolute -top-36 left-40 md:left-28 range-wrapper">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="range"
                />
                <span className=" font-bold text-green-900 right-7 absolute text-xl">
                  {volume}
                </span>
              </div>
            )}

            <Button onClick={() => setShowVolume((prev) => !prev)}>
              {volume < 5 ? (
                <IoMdVolumeOff className="text-2xl" />
              ) : volume < 40 ? (
                <IoMdVolumeLow className="text-2xl" />
              ) : (
                <IoMdVolumeHigh className="text-2xl" />
              )}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-[300px]">
          <span
            className={`${ligthMode ? "text-gray-900" : "text-white"} w-20`}
          >
            {timeFormat(infos.currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={infos.durationTime || 0}
            value={infos.currentTime}
            onChange={dragHandler}
          />
          <span
            className={`${ligthMode ? "text-gray-900" : "text-white"} w-20`}
          >
            {timeFormat(infos.durationTime)}
          </span>
        </div>
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
