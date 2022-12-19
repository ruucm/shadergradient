import React from "react";
// import { useFiber } from "../utils/index";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";

const lineProps: any = {
  midA: [0, 0, 0],
  midB: [0, 0, 0],
  lineWidth: 1,
};

export function Axis({ isFigmaPlugin }) {
  // const { CubicBezierLine, GizmoHelper, GizmoViewport } = useFiber();
  console.log("GizmoHelper!");

  return (
    <>
      {/* <CubicBezierLine
        start={[0, 0, 0]}
        end={[10, 0, 0]}
        color='red'
        {...lineProps}
      />
      <CubicBezierLine
        start={[0, 0, 0]}
        end={[0, 10, 0]}
        color='green'
        {...lineProps}
      />
      <CubicBezierLine
        start={[0, 0, 0]}
        end={[0, 0, 10]}
        color='blue'
        {...lineProps}
      /> */}
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={isFigmaPlugin ? [25, 25] : [65, 110]} // widget margins (X, Y)
        // renderPriority={2}
      >
        <GizmoViewport
          axisColors={["#FF430A", "#FF430A", "#FF430A"]}
          labelColor="white"
          hideNegativeAxes
          // @ts-ignore
          axisHeadScale={0.8}
        />
      </GizmoHelper>
    </>
  );
}
