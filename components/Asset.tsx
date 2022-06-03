import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const Model = dynamic(() => import("../components/Model"), { ssr: false });

const Asset = (props: {
  asset: string;
  swipeIndex: number;
  index: number;
  muted: boolean;
  allowTouchMove: any;
  setIsVideo: any;
}) => {
  const ref: any = useRef(null);

  const { asset, swipeIndex, index, muted, allowTouchMove, setIsVideo } = props;

  const [type, setType] = useState<string | null>(null);
  const mimeType = type?.split("/")[0];

  if (!type) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("HEAD", asset);
    xhttp.onreadystatechange = function () {
      if (this.readyState == this.DONE) {
        setType(this.getResponseHeader("Content-Type") || "none");
      }
    };
    xhttp.send();
  }

  if (swipeIndex === index) {
    if (
      type === "model/gltf-binary" ||
      type === "application/pdf" ||
      type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      allowTouchMove(false);
    else allowTouchMove(true);

    if (mimeType === "video") setIsVideo(true);
    else setIsVideo(false);
  }

  if (mimeType === "image")
    return (
      <SwiperSlide
        className="m-auto min-w-0 object-contain h-full w-full"
        key={index}
      >
        <img className="m-auto min-w-0 object-contain h-full" src={asset} />
      </SwiperSlide>
    );

  if (mimeType === "video") {
    if (swipeIndex === index && ref && ref.current) ref.current.play();
    else if (ref && ref.current) ref.current.pause();

    return (
      <SwiperSlide
        className="m-auto min-w-0 object-contain h-full w-full"
        key={index}
      >
        <video
          className="m-auto min-w-0 object-contain h-full"
          src={asset}
          controls={false}
          loop
          autoPlay
          playsInline
          muted={swipeIndex !== index || muted}
          ref={ref}
        />
      </SwiperSlide>
    );
  }

  if (type === "model/gltf-binary") {
    return (
      <SwiperSlide className="w-full h-full pointer-events-none touch-none">
        <Model
          src={"https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"}
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://docs.google.com/gview?url=${asset}&embedded=true`}
      ></iframe>
    </>
  );
};

export default Asset;
