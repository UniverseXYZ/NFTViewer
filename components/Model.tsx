import "@google/model-viewer";

const Model = (props: { src: any }) => (
  // @ts-ignore
  <model-viewer
    style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
    className="w-full h-full"
    src={props.src}
    ios-src=""
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  />
);

export default Model;
