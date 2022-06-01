import { useRef } from "react";

const Video = (props: {
  asset: string;
  swipeIndex: number;
  index: number;
  muted: boolean;
}) => {
  const { asset, swipeIndex, index, muted } = props;
  const ref: any = useRef(null);

  if (swipeIndex === index && ref && ref.current) ref.current.play();
  else if (ref && ref.current) ref.current.pause();

  return (
    <>
      <video
        className="m-auto min-w-0 object-contain h-full"
        src={asset}
        controls={false}
        loop
        autoPlay
        playsInline
        muted={swipeIndex !== index || muted}
        ref={ref}
      ></video>
    </>
  );
};

export default Video;
