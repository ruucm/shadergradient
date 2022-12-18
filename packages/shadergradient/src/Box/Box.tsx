import React from "react";

type Props = {
  control?: "query" | "props";
  [x: string]: any;
};

export function Box(props: Props) {
  return (
    <>
      <ambientLight />
      {/* @ts-ignore */}
      <pointLight position={[10, 10, 10]} />
      <mesh {...props} rotation={[1, 1, 0]} position={[0, 2, 0]}>
        {/* @ts-ignore */}
        <boxGeometry args={[2, 2, 2]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    </>
  );
}
