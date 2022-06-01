import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import "swiper/css";

import Details from "../public/details.svg";
import SoundOn from "../public/sound-on.svg";
import SoundOff from "../public/sound-off.svg";
import Video from "components/Video";

const Model = dynamic(() => import("../components/Model"), { ssr: false });
const OBJModel = dynamic(() => import("../components/ModelOBJ"), {
  ssr: false,
});

const Index = () => {
  const router = useRouter();

  const { assets: list } = router.query;
  const assets = list?.toString().split(",") || [];
  console.log("GOT ASSETS", assets);

  const [swiper, setSwiper] = useState<any>(null);
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [expand, setExpand] = useState(true);

  if (swiper) swiper.allowTouchMove = swipeIndex === 2 ? false : true;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NFT View by illestrater" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="justify-center flex flex-col h-screen">
        <div
          className={`justify-center flex shrink min-h-0 ${
            expand ? "info-bottom h-full" : "info-bottom h-1/2"
          }`}
        >
          <div
            className={`min-w-0 info-side h-full overflow-y-scroll break-words ${
              expand ? "w-0" : "w-1/2 border-grey-300 border-r-2"
            }`}
          >
            <div
              className={`p-2 pt-1 ${expand ? "opacity-0" : "info-side-text"}`}
            >
              NFT Info Is this a sdk fhla fhlahsduif hailsudhf ilauwhe
              filuahwfuewh alifuhaewilfua ilwh NFT Info Is this a sdk fhla
              fhlahsduif hailsudhf ilauwhe filuahwfuewh alifuhaewilfua ilwh NFT
              Info Is this a sdk fhla fhlahsduif hailsudhf ilauwhe filuahwfuewh
              alifuhaewilfua ilwh NFT Info Is this a sdk fhla fhlahsduif
              hailsudhf ilauwhe filuahwfuewh alifuhaewilfua ilwh NFT Info Is
              this a sdk fhla fhlahsduif hailsudhf ilauwhe filuahwfuewh
              alifuhaewilfua ilwh NFT Info Is this a sdk fhla fhlahsduif
              hailsudhf ilauwhe filuahwfuewh alifuhaewilfua ilwh NFT Info Is
              this a sdk fhla fhlahsduif hailsudhf ilauwhe filuahwfuewh
              alifuhaewilfua ilwh
            </div>
          </div>
          <Swiper
            className={`align-middle justify-center h-full cursor-grab active:cursor-grabbing ${
              expand ? "info-side w-full" : "info-side w-1/2"
            }`}
            slidesPerView={1}
            onSlideChange={(slide) => setSwipeIndex(slide.activeIndex)}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {assets.map((asset, index) => {
              return (
                <SwiperSlide
                  className="m-auto min-w-0 object-contain h-full w-full"
                  key={index}
                >
                  <Video
                    asset={asset}
                    swipeIndex={swipeIndex}
                    index={index}
                    muted={muted}
                  />
                </SwiperSlide>
              );
            })}
            {/* //@ts-ignore */}
            <SwiperSlide className="w-full h-full pointer-events-none touch-none">
              <Model
                src={
                  "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
                }
              />
            </SwiperSlide>
            {/* <SwiperSlide className="w-full h-full">
              <OBJModel
                src="https://arweave.net/oGpKV39wVWBqheDtgF0yLukDmg1qwglgosRgABUZNLk"
                texPath=""
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div
          className={`flex border-t-2 border-gray-300 info-bottom ${
            expand ? "h-14" : "h-1/2"
          }`}
        >
          <div className={"flex-auto ml-2 mt-1.5 text-sm truncate h-14"}>
            <div className={"font-bold truncate"}>NFT Title</div>
            <div className={"truncate"}>Description of the provided asset</div>
          </div>
          <div className={"flex space-x-1 mr-2 h-14"}>
            <div className="round" onClick={() => setMuted(!muted)}>
              <div className="outliner cursor-pointer">
                <div className={"sound-buttons"}>
                  {muted ? <Image src={SoundOff} /> : <Image src={SoundOn} />}
                </div>
              </div>
            </div>
            <div className="round" onClick={() => setExpand(!expand)}>
              <div className="outliner cursor-pointer">
                <div className={"control-buttons"}>
                  <Image src={Details} />
                </div>
              </div>
            </div>
            <div className="roundPrev" onClick={() => swiper.slidePrev()}>
              <div className="outliner cursor-pointer">
                <div id="cta">
                  <span className="arrowPrev primeraPrev prev"></span>
                  <span className="arrowPrev segundaPrev prev"></span>
                </div>
              </div>
            </div>
            <div className="round" onClick={() => swiper.slideNext()}>
              <div className="outliner cursor-pointer">
                <div id="cta">
                  <span className="arrow primera next"></span>
                  <span className="arrow segunda next"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
