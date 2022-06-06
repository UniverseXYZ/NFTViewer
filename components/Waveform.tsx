import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Play from "../public/play.svg";
import Pause from "../public/pause.svg";
import PlayOnce from "../public/play-once.svg";
import Repeat from "../public/repeat.svg";
import RepeatOnce from "../public/repeat-once.svg";
// @ts-ignore
import WaveSurfer from "wavesurfer.js";
import useSize from "@react-hook/size";

const Waveform = (props: { audio: any; swiper: any }) => {
  const { audio, swiper } = props;
  const containerRef: any = useRef();
  const [width, height] = useSize(containerRef);

  const waveContainerRef: any = useRef();
  const waveSurferRef: any = useRef({
    isPlaying: () => false,
  });
  const [waveSurfer, setWaveSurfer] = useState<any>();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [playState, setPlayState] = useState(1);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveContainerRef.current,
      responsive: true,
      barWidth: 3,
      barHeight: 2,
      cursorWidth: 0,
      cursorHeight: 1,
      waveColor: "#00eaea",
      progressColor: "#bceb00",
      height: 400,
      hideScrollbar: true,
    });

    ws.load(audio);
    ws.on("ready", () => {
      waveSurferRef.current = ws;
      waveSurferRef.current.params.height =
        containerRef.current.clientHeight / 3;
      waveSurferRef.current.drawer.setHeight =
        containerRef.current.clientHeight / 3;
      waveSurferRef.current.drawBuffer();
    });

    ws.on("finish", () => {
      waveSurferRef.current.seekTo(0);
      toggleIsPlaying(false);
    });

    setWaveSurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [audio]);

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.on("finish", () => {
        waveSurferRef.current.seekTo(0);
        if (playState === 1) {
          waveSurferRef.current.stop();
          toggleIsPlaying(false);
        } else if (playState === 2) {
          waveSurferRef.current.play();
          toggleIsPlaying(true);
        } else {
          waveSurferRef.current.stop();
          toggleIsPlaying(false);
          swiper.slideNext();
        }
      });
    }

    return () => {
      if (waveSurfer) waveSurfer.un("finish");
    };
  }, [playState]);

  useEffect(() => {
    if (
      waveSurferRef &&
      waveSurferRef.current &&
      waveSurferRef.current.params
    ) {
      waveSurferRef.current.params.height = height / 3;
      waveSurferRef.current.drawer.setHeight = height / 3;
      waveSurferRef.current.drawBuffer();
    }
  }, [width, height]);

  return (
    <div className="h-full" ref={containerRef}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "33%",
        }}
      >
        <div ref={waveContainerRef} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: "3rem",
          width: "5rem",
          left: 0,
          right: 0,
          margin: "auto",
          display: "flex",
        }}
      >
        <div style={{ marginRight: "1rem", marginTop: "0.35rem" }}>
          <button
            onClick={() => {
              waveSurferRef.current.playPause();
              toggleIsPlaying(waveSurferRef.current.isPlaying());
            }}
            type="button"
          >
            {isPlaying ? (
              <Image src={Pause} width="24px" height="24px" />
            ) : (
              <Image src={Play} width="24px" height="24px" />
            )}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (playState === 1) setPlayState(2);
              else if (playState === 2) setPlayState(3);
              else setPlayState(1);
            }}
            type="button"
          >
            {playState === 1 && (
              <Image src={PlayOnce} width="36px" height="36px" />
            )}
            {playState === 2 && (
              <Image src={RepeatOnce} width="36px" height="36px" />
            )}
            {playState === 3 && (
              <Image src={Repeat} width="36px" height="36px" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waveform;
