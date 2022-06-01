import { OBJModel } from "react-3d-viewer";

const ModelOBJ = (props: { src: any }) => (
  // @ts-ignore
  <>
    <OBJModel
      width="400"
      height="400"
      position={{ x: 0, y: -100, z: 0 }}
      src={props.src}
      onLoad={(test: any) => {
        console.log("wtf", test);
      }}
    />
  </>
);

export default ModelOBJ;
