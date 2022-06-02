import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import type { ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const Model = dynamic(() => import("../components/Model"), { ssr: false });

const OBJModel = dynamic(() => import("../components/ModelOBJ"), {
  ssr: false,
});

const Asset = (props: {
  asset: string;
  swipeIndex: number;
  index: number;
  muted: boolean;
}) => {
  const ref: any = useRef(null);

  const { asset, swipeIndex, index, muted } = props;

  const [type, setType] = useState<string | null>(null);

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

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

  if (type?.split("/")[0] === "image")
    return (
      <SwiperSlide
        className="m-auto min-w-0 object-contain h-full w-full"
        key={index}
      >
        <img className="m-auto min-w-0 object-contain h-full" src={asset} />
      </SwiperSlide>
    );

  if (type?.split("/")[0] === "video") {
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

  if (type === "application/pdf") {
    console.log("yooo", asset);
    return (
      <div className="w-full h-full pointer-events-none touch-none">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
          <div
            className="rpv-core__viewer"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#eeeeee",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                display: "flex",
                padding: "0.25rem",
              }}
            >
              <Toolbar>
                {(props: ToolbarSlot) => {
                  const {
                    CurrentPageInput,
                    Download,
                    NumberOfPages,
                    ShowSearchPopover,
                    Zoom,
                  } = props;
                  return (
                    <>
                      <div style={{ padding: "0px 0px 0px 6px" }}>
                        <ShowSearchPopover />
                      </div>
                      <div style={{ padding: "0px 2px" }}>
                        <Zoom />
                      </div>
                      <div style={{ padding: "0px 2px", width: "3rem" }}>
                        <CurrentPageInput />
                      </div>
                      <div style={{ minWidth: "2.4rem" }}>
                        &nbsp;/ <NumberOfPages />
                      </div>
                      <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                        <Download />
                      </div>
                    </>
                  );
                }}
              </Toolbar>
            </div>
            <div
              style={{
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Viewer fileUrl={asset} plugins={[toolbarPluginInstance]} />
            </div>
          </div>
        </Worker>
      </div>
    );
  }

  return <>{type}</>;
};

export default Asset;
