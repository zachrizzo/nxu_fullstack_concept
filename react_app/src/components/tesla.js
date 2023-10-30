import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Lightformer,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { TeslaModel3 } from "./tesla_car";
import { CyberTruck } from "./cyberTruck";
// import { DirectionalLight } from "three";
export default function Tesla({ selectedCar }) {
  console.log("selectedCar", selectedCar);
  return (
    // <Suspense fallback={null}>
    <Canvas shadows camera={{ position: [10, 10, 10] }}>
      <ambientLight intensity={2} />
      <directionalLight
        intensity={10}
        position={[0, 0, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      {/* <directionalLight
        intensity={10}
        position={[5, 0, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      /> */}
      <pointLight castShadow position={[0, 0, 5]} intensity={10} />
      <OrbitControls
        rotate
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / -30}
        maxPolarAngle={Math.PI / 2.3}
      />
      {selectedCar === "Tesla Model 3" ? <TeslaModel3 /> : <CyberTruck />}

      <mesh
        receiveShadow={true}
        castShadow={true}
        position={[-2.2, -2.2, -2.2]}
        rotation-x={-Math.PI / 2}
      >
        <planeGeometry
          args={[100, 100]}
          castShadow={true}
          receiveShadow={true}
        />

        <MeshReflectorMaterial
          envMapIntensity={0}
          dithering={true}
          color={[9, 9, 9]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          reflectorOffset={0.2}
        />
        {/* <meshPhysicalMaterial  color={[9, 9, 9]} /> */}
      </mesh>

      {/* cube */}
      {/* <mesh castShadow receiveShadow position={[0, 5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh> */}
      {/* <Environment files={"path_to_your_hdri.hdr"} background /> */}
    </Canvas>
    // </Suspense>
  );
}
