export function Box({ color = 'orange', ...props }) {
  return (
    <>
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <mesh {...props} rotation={[1, 1, 0]} scale={0.5}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  )
}
