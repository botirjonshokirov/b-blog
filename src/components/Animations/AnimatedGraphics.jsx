// import React, { useRef } from "react";
// import { useSpring, a } from "react-spring/three";
// import { useThree, useFrame } from "react-three-fiber";
// // import { Html } from "drei";

// const AnimatedGraphics = () => {
//   const meshRef = useRef();

//   useFrame(() => {
//     // Rotate the cube on each frame update
//     meshRef.current.rotation.x += 0.01;
//     meshRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="blue" />
//     </mesh>
//   );
// };

// const AnimatedBackground = () => {
//   const group = useRef();
//   const { size, viewport } = useThree();
//   const aspect = size.width / viewport.width;

//   const [spring, set] = useSpring(() => ({
//     position: [0, 0, 0],
//     scale: [1, 1, 1],
//     rotation: [0, 0, 0],
//     config: { mass: 10, tension: 1000, friction: 300 },
//   }));

//   useFrame(({ mouse }) => {
//     const x = (mouse.x * viewport.width) / 2;
//     const y = (mouse.y * viewport.height) / 2;
//     set({ position: [x / aspect, -y / aspect, 0] });
//   });

//   return (
//     <group ref={group}>
//       <a.mesh
//         scale={spring.scale}
//         position={spring.position}
//         rotation={spring.rotation}
//       >
//         <AnimatedGraphics />
//       </a.mesh>
//     </group>
//   );
// };

// export default AnimatedBackground;

import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";

const AnimatedGraphics = () => {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the cube on each frame update
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

export default AnimatedGraphics;
