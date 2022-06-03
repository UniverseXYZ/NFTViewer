import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Details from "../public/details.svg";
import SoundOn from "../public/sound-on.svg";
import SoundOff from "../public/sound-off.svg";
import Link from "../public/link.svg";
import Asset from "components/Asset";

// Test Metadata:
// eyJuYW1lIjoiQ29tcGxleCB0b2tlbiAjNTAvNTAiLCAiZGVzY3JpcHRpb24iOiJUaGlzIGlzIHRoZSB0b2tlbiBkZXNjcmlwdGlvbiBvZiB0aGUgY29tcGxleCB0b2tlbiIsICJpbWFnZSI6ICJodHRwczovL29wZW5zZWF1c2VyZGF0YS5jb20vZmlsZXMvNDkyODAwNThjMzI4OTYxM2QyNzM1Mzc2ZjFkNzBmYWEubXA0IiwgImxpY2Vuc2UiOiAiaHR0cHM6Ly9hcndlYXZlLm5ldC9saWNlbnNlIiwgImV4dGVybmFsX3VybCI6ICJodHRwczovL3VuaXZlcnNlLnh5eiIsICJhdHRyaWJ1dGVzIjogW3sidHJhaXRfdHlwZSI6IlJhcml0eSIsICJ2YWx1ZSI6IkxlZ2VkYXJ5IiwgInBlcm1hbmVudCI6InRydWUifSx7InRyYWl0X3R5cGUiOiJTY29yZSIsICJ2YWx1ZSI6IjEwMCIsICJwZXJtYW5lbnQiOiJ0cnVlIn0seyJ0cmFpdF90eXBlIjoiQ29sb3IiLCAidmFsdWUiOiJCbHVlIiwgInBlcm1hbmVudCI6ImZhbHNlIn1dLCAiYXNzZXRzIjogW3sibmFtZSI6IkZpcnN0IEFzc2V0IFllcyIsICJkZXNjcmlwdGlvbiI6IkZpcnN0IERlc2NyaXB0aW9uIElzIGdvaW5nIHRvIGJlIGEgYmlnIGxvbmcgc3RyaW5nIG9mIHRleHQgdG8gZGVzY3JpYmUgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdmlzdWFsIGFuZCBzaW1wbGUgcmVwcmVzZW50YXRpb24gb2YgaW5jb2hlcmVudCB0aG91Z2h0IHByb2Nlc3NlcyBleGVtcGxpZmllZCBieSBzdWJqZWN0IG1hdHRlciB6ZXJvLiBGaXJzdCBEZXNjcmlwdGlvbiBJcyBnb2luZyB0byBiZSBhIGJpZyBsb25nIHN0cmluZyBvZiB0ZXh0IHRvIGRlc2NyaWJlIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHZpc3VhbCBhbmQgc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIGluY29oZXJlbnQgdGhvdWdodCBwcm9jZXNzZXMgZXhlbXBsaWZpZWQgYnkgc3ViamVjdCBtYXR0ZXIgemVyby4gRmlyc3QgRGVzY3JpcHRpb24gSXMgZ29pbmcgdG8gYmUgYSBiaWcgbG9uZyBzdHJpbmcgb2YgdGV4dCB0byBkZXNjcmliZSB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB2aXN1YWwgYW5kIHNpbXBsZSByZXByZXNlbnRhdGlvbiBvZiBpbmNvaGVyZW50IHRob3VnaHQgcHJvY2Vzc2VzIGV4ZW1wbGlmaWVkIGJ5IHN1YmplY3QgbWF0dGVyIHplcm8uICIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzQ5MjgwMDU4YzMyODk2MTNkMjczNTM3NmYxZDcwZmFhLm1wNCIsICJiYWNrdXBfYXNzZXQiOiJodHRwczovL29wZW5zZWF1c2VyZGF0YS5jb20vZmlsZXMvNDkyODAwNThjMzI4OTYxM2QyNzM1Mzc2ZjFkNzBmYWEubXA0IiwgInRvcnJlbnQiOiJtYWduZXQ6P3h0PXVybjpidGloOmMxMmZlMWMwNmJiYTI1NGE5ZGM5ZjUxOWIzMzVhYTdjMTM2N2E4OGEiLCAiZGVmYXVsdCI6InRydWUifSx7Im5hbWUiOiJTZWNvbmQgQXNzZXQgTG9uZyB0aXRsZSBmb3IgZnVsbCB0ZXN0aW5nIHB1cnBvc2VzIHRoYXQgd2Ugd291bGQgbGlrZSIsICJkZXNjcmlwdGlvbiI6IlNlY29uZCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzL2FkZGYwYjMzODdmZWZkM2QwNzczNzM1MGJhZGUyYjcxLm1wNCIsICJiYWNrdXBfYXNzZXQiOiJodHRwczovL29wZW5zZWF1c2VyZGF0YS5jb20vZmlsZXMvYWRkZjBiMzM4N2ZlZmQzZDA3NzM3MzUwYmFkZTJiNzEubXA0IiwgInRvcnJlbnQiOiIiLCAiZGVmYXVsdCI6ImZhbHNlIn0seyJuYW1lIjoiVGhpcmQgQXNzZXQiLCAiZGVzY3JpcHRpb24iOiJUaGlyZCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzL2I2OGNiMWJmOWRlZjg5ODI5MDVjMTRlYjM3Y2NlZjlmLm1wNCIsICJiYWNrdXBfYXNzZXQiOiJodHRwczovL29wZW5zZWF1c2VyZGF0YS5jb20vZmlsZXMvYjY4Y2IxYmY5ZGVmODk4MjkwNWMxNGViMzdjY2VmOWYubXA0IiwgInRvcnJlbnQiOiIiLCAiZGVmYXVsdCI6ImZhbHNlIn0seyJuYW1lIjoiRm91dGggQXNzZXQiLCAiZGVzY3JpcHRpb24iOiJGb3V0aCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NLeFFPZ1BHMWszcTc1cmFxc0ZEaHI2YXhkcEJzMDcxZUl2VWwxOUpZMDZweTIyNlJRY1FLMklYQWw1UnpiOFUza2pWLTU5b0MtbS0xamxCLTNzRjRPeTZ4N1VUakpQbXJOdjFmdyIsICJiYWNrdXBfYXNzZXQiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vc0t4UU9nUEcxazNxNzVyYXFzRkRocjZheGRwQnMwNzFlSXZVbDE5SlkwNnB5MjI2UlFjUUsySVhBbDVSemI4VTNralYtNTlvQy1tLTFqbEItM3NGNE95Nng3VVRqSlBtck52MWZ3IiwgInRvcnJlbnQiOiIiLCAiZGVmYXVsdCI6ImZhbHNlIn0seyJuYW1lIjoiRmlmdGggQXNzZXQiLCAiZGVzY3JpcHRpb24iOiJGaWZ0aCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9tb2RlbHZpZXdlci5kZXYvc2hhcmVkLWFzc2V0cy9tb2RlbHMvTmVpbEFybXN0cm9uZy5nbGIiLCAiYmFja3VwX2Fzc2V0IjoiaHR0cHM6Ly9tb2RlbHZpZXdlci5kZXYvc2hhcmVkLWFzc2V0cy9tb2RlbHMvTmVpbEFybXN0cm9uZy5nbGIiLCAidG9ycmVudCI6IiIsICJkZWZhdWx0IjoiZmFsc2UifSx7Im5hbWUiOiJTaXh0aCBBc3NldCIsICJkZXNjcmlwdGlvbiI6IlNpeHRoIERlc2NyaXB0aW9uIiwgInByaW1hcnlfYXNzZXQiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYWRhSGZKUGRoWHBteXBua2g4ejYyd245ZS1YZGVwR2JMcG1DOFdzMVRzRnM0WUVqWWFZSDZIMXRVSHJyNDhNNS1mN2J6bzJxUFp4SVpnbmpIT2xvT3NRSloyalktS3RKVUFjdFdnIiwgImJhY2t1cF9hc3NldCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hZGFIZkpQZGhYcG15cG5raDh6NjJ3bjllLVhkZXBHYkxwbUM4V3MxVHNGczRZRWpZYVlINkgxdFVIcnI0OE01LWY3YnpvMnFQWnhJWmduakhPbG9Pc1FKWjJqWS1LdEpVQWN0V2ciLCAidG9ycmVudCI6IiIsICJkZWZhdWx0IjoiZmFsc2UifSx7Im5hbWUiOiJTZXZlbnRoIEFzc2V0IiwgImRlc2NyaXB0aW9uIjoiU2V2ZW50aCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9fejZ1WGtCMVVPdzhZRy03amtJXzlaR2JBdzRORklzTHBDX21Yc2RhRGdNIiwgImJhY2t1cF9hc3NldCI6Imh0dHBzOi8vYXJ3ZWF2ZS5uZXQvX3o2dVhrQjFVT3c4WUctN2prSV85WkdiQXc0TkZJc0xwQ19tWHNkYURnTSIsICJ0b3JyZW50IjoiIiwgImRlZmF1bHQiOiJmYWxzZSJ9LHsibmFtZSI6IkVpZ2h0aCBBc3NldCIsICJkZXNjcmlwdGlvbiI6IkVpZ2h0aCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC96RjVIcVJ5UnZIN2xZSmFET2ZEXzJ2em5wbzNrTU50RHhkWGhtbFFrTWp3IiwgImJhY2t1cF9hc3NldCI6Imh0dHBzOi8vYXJ3ZWF2ZS5uZXQvekY1SHFSeVJ2SDdsWUphRE9mRF8ydnpucG8za01OdER4ZFhobWxRa01qdyIsICJ0b3JyZW50IjoiIiwgImRlZmF1bHQiOiJmYWxzZSJ9LHsibmFtZSI6Ik5pbnRoIEFzc2V0IiwgImRlc2NyaXB0aW9uIjoiTmludGggRGVzY3JpcHRpb24iLCAicHJpbWFyeV9hc3NldCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8zWjFKWUFhSUNfU1pzTjJEUE9YdnJYRGhFMjVLYk1KRnpOYjFMNGpfVWc3Qm1QT0psZ2I4RWNyRDVvMG1fdnR3OWlEdXlsNUFzMUhteHkxVmtQSTkzMk04VWJjbm1QNnVBS05PSldJIiwgImJhY2t1cF9hc3NldCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8zWjFKWUFhSUNfU1pzTjJEUE9YdnJYRGhFMjVLYk1KRnpOYjFMNGpfVWc3Qm1QT0psZ2I4RWNyRDVvMG1fdnR3OWlEdXlsNUFzMUhteHkxVmtQSTkzMk04VWJjbm1QNnVBS05PSldJIiwgInRvcnJlbnQiOiIiLCAiZGVmYXVsdCI6ImZhbHNlIn0seyJuYW1lIjoiVGVudGggQXNzZXQiLCAiZGVzY3JpcHRpb24iOiJUZW50aCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0tyMXhNdEhVZTdvVUdVdk84eVJxVGpNTmg4NjdTLXN2Q2Y4U2FtenlQaDBneW9RRWFHc2IyZVlCZ0Nmb20ydTlqWkl5aTNaWTFPLTBmSmlBQVc5R1VDOURldkp5NDNHYTBOV2oiLCAiYmFja3VwX2Fzc2V0IjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0tyMXhNdEhVZTdvVUdVdk84eVJxVGpNTmg4NjdTLXN2Q2Y4U2FtenlQaDBneW9RRWFHc2IyZVlCZ0Nmb20ydTlqWkl5aTNaWTFPLTBmSmlBQVc5R1VDOURldkp5NDNHYTBOV2oiLCAidG9ycmVudCI6IiIsICJkZWZhdWx0IjoiZmFsc2UifSx7Im5hbWUiOiJOZXcgQXNzZXQgVGl0bGUiLCAiZGVzY3JpcHRpb24iOiJOZXcgQXNzZXQgRGVzY3JpcHRpb24iLCAicHJpbWFyeV9hc3NldCI6Imh0dHBzOi8vYXJ3ZWF2ZS5uZXQvbmV3QXNzZXQiLCAiYmFja3VwX2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9uZXdBc3NldEJhY2t1cCIsICJ0b3JyZW50IjoibWFnbmV0Oj94dD11cm46YnRpaDp5byIsICJkZWZhdWx0IjoiZmFsc2UifSx7Im5hbWUiOiJCdWxrIEFzc2V0IFRpdGxlIiwgImRlc2NyaXB0aW9uIjoiQnVsayBBc3NldCBEZXNjcmlwdGlvbiIsICJwcmltYXJ5X2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9idWxrQXNzZXQiLCAiYmFja3VwX2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9idWxrQXNzZXRCYWNrdXAiLCAidG9ycmVudCI6Im1hZ25ldDo/eHQ9dXJuOmJ0aWg6eW8iLCAiZGVmYXVsdCI6ImZhbHNlIn0seyJuYW1lIjoiQnVsayBBc3NldCBUaXRsZSAyIiwgImRlc2NyaXB0aW9uIjoiQnVsayBBc3NldCBEZXNjcmlwdGlvbiAyIiwgInByaW1hcnlfYXNzZXQiOiJodHRwczovL2Fyd2VhdmUubmV0L2J1bGtBc3NldDIiLCAiYmFja3VwX2Fzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9idWxrQXNzZXRCYWNrdXAyIiwgInRvcnJlbnQiOiJtYWduZXQ6P3h0PXVybjpidGloOnlvIiwgImRlZmF1bHQiOiJmYWxzZSJ9XSwgImFkZGl0aW9uYWxfYXNzZXRzIjogW3siY29udGV4dCI6IkVUSCBXaGl0ZXBhcGVyIiwgImFzc2V0IjoiaHR0cHM6Ly9hcndlYXZlLm5ldC9fejZ1WGtCMVVPdzhZRy03amtJXzlaR2JBdzRORklzTHBDX21Yc2RhRGdNIn0seyJjb250ZXh0IjoiVGltIEthbmcgTWVkaWEgS2l0ZSIsICJhc3NldCI6Imh0dHBzOi8vYXJ3ZWF2ZS5uZXQvekY1SHFSeVJ2SDdsWUphRE9mRF8ydnpucG8za01OdER4ZFhobWxRa01qdyJ9XX0=

const Index = () => {
  const router = useRouter();

  const { metadata: arweave } = router.query;

  const [metadata, setMetadata] = useState<any>({ assets: [] });
  const { assets } = metadata;

  useEffect(() => {
    function getMetadata(metadata: string) {
      return fetch(`https://arweave.net/${metadata}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("got json", responseJson);
          setMetadata(responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (arweave) getMetadata(arweave.toString());
  }, [arweave]);

  const [swiper, setSwiper] = useState<any>(null);
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const [muted, setMuted] = useState(true);
  const [expand, setExpand] = useState(true);

  console.log("GOT METADATA", metadata);

  const allowTouchMove = (val: boolean) => {
    swiper.allowTouchMove = val;
  };

  // if (swiper) swiper.allowTouchMove = swipeIndex === 2 ? false : true;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NFT View by illestrater" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="justify-center flex flex-col h-screen overflow-hidden bg-white">
        <div
          className={`justify-center flex shrink min-h-0 ${
            expand ? "info-bottom h-full" : "info-bottom h-1/2"
          }`}
        >
          <div
            className={`min-w-0 info-side h-full overflow-y-auto overflow-x-hidden break-words ${
              expand ? "w-0" : "w-1/2 border-grey-300 border-r-2"
            }`}
          >
            <div className={`p-2 pt-1 ${expand ? "opacity-0" : "info-fade"}`}>
              <div className="flex">
                <div className={"font-bold flex-auto"}>
                  {assets && assets.length > 0 && assets[swipeIndex].name}
                </div>
                <div
                  className={
                    "pt-0 pb-0.5 p-1 mt-0.5 ml-2 text-xs shrink-0 bg-gray-200 rounded-md h-5"
                  }
                >
                  {swipeIndex + 1} / {assets?.length}
                </div>
              </div>

              <div>
                {assets && assets.length > 0 && assets[swipeIndex].description}
              </div>
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
            {assets?.length &&
              assets.map((asset: any, index: number) => {
                return (
                  <SwiperSlide
                    className="m-auto min-w-0 object-contain h-full w-full"
                    key={index}
                  >
                    <Asset
                      asset={asset.primary_asset}
                      swipeIndex={swipeIndex}
                      index={index}
                      muted={muted}
                      allowTouchMove={allowTouchMove}
                      setIsVideo={setIsVideo}
                    />
                  </SwiperSlide>
                );
              })}
            {/* <SwiperSlide className="w-full h-full">
              <OBJModel
                src="https://arweave.net/oGpKV39wVWBqheDtgF0yLukDmg1qwglgosRgABUZNLk"
                texPath=""
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div
          className={`flex flex-col border-t-2 border-gray-300 info-bottom ${
            expand ? "h-12" : "h-1/2"
          }`}
        >
          <div className="flex min-w-0 w-full shadow-lg">
            <div className={`flex-auto ml-2 mt-0.5 text-sm h-10 truncate`}>
              {expand ? (
                <div className={"info-fade leading-4 mt-0.5 mr-1"}>
                  <div className={"font-bold truncate"}>
                    {assets && assets.length > 0 && assets[swipeIndex].name}
                  </div>
                  <div className={"truncate"}>
                    {assets &&
                      assets.length > 0 &&
                      assets[swipeIndex].description}
                  </div>
                </div>
              ) : (
                <div className={"font-bold text-lg mt-1 truncate"}>
                  Token Info
                </div>
              )}
            </div>
            <div className={"flex space-x-1 mr-2 h-10"}>
              {isVideo && (
                <div className="round" onClick={() => setMuted(!muted)}>
                  <div className="outliner cursor-pointer">
                    <div className={"sound-buttons"}>
                      {muted ? (
                        <Image unoptimized src={SoundOff} />
                      ) : (
                        <Image unoptimized src={SoundOn} />
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="round" onClick={() => setExpand(!expand)}>
                <div className="outliner cursor-pointer">
                  <div className={"control-buttons"}>
                    <Image unoptimized src={Details} />
                  </div>
                </div>
              </div>
              <div
                className={swipeIndex === 0 ? "roundEnd" : "roundPrev"}
                onClick={() => swiper.slidePrev()}
              >
                <div className="outliner cursor-pointer">
                  <div id="cta">
                    <span className="arrowPrev primeraPrev prev"></span>
                    <span className="arrowPrev segundaPrev prev"></span>
                  </div>
                </div>
              </div>
              <div
                className={
                  swipeIndex === assets?.length - 1 ? "roundEnd" : "round"
                }
                onClick={() => swiper.slideNext()}
              >
                <div className="outliner cursor-pointer">
                  <div id="cta">
                    <span className="arrow primera next"></span>
                    <span className="arrow segunda next"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!expand && (
            <div
              className={
                "p-2 opacity-100 info-fade overflow-y-auto overflow-x-hidden min-h-0 flex-auto"
              }
            >
              <div className="flex font-bold">
                <div className={"flex-auto"}>{metadata?.name}</div>
                {metadata?.external_url && (
                  <div
                    className={
                      "shrink-0 bg-grey-200 rounded-md mt-0.5 w-4 h-4 cursor-pointer"
                    }
                  >
                    <Image
                      unoptimized
                      src={Link}
                      onClick={() => {
                        window.open(metadata.external_url, "_blank");
                      }}
                    />
                  </div>
                )}
              </div>
              <div>{metadata?.description}</div>
              <div className="font-bold mt-2">Properties</div>
              <div className="flex text-sm flex-wrap pb-2">
                {metadata?.attributes.map((property: any) => {
                  return (
                    <div className="mt-2 mr-2 p-2 bg-gray-200 rounded-lg">
                      <div className="font-bold">{property.trait_type}</div>
                      <div>{property.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};;;

export default Index;
