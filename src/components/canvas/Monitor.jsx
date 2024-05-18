import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Monitor = () => {
  const monitor = useGLTF("./monitor/scene.gltf");

  return (
    <primitive object={monitor.scene} scale={37} position-y={0} rotation-y={0} />
  );
};

const MonitorCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ cursor: "grab" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Monitor />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};


export default MonitorCanvas;