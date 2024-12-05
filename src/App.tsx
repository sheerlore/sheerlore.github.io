import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import Bird from "./components/Bird"
import camera from "./helper/three/camera"
import Floor from "./components/Floor"

function App() {

  return (
    <>
      <div id="canvas-container">
        <Canvas
          camera={camera}
          shadows={true}
        >
          {/* <directionalLight args={[0xffffff, 1]} position={[-50, 50, 50]} castShadow /> */}
          {/* <directionalLight args={[0xff0000, 0.9]} position={[30, 80, 50]} castShadow/> */}
          <ambientLight />
          <Floor receiveShadow />
          <Bird castShadow />
        </Canvas>
      </div>
    </>
  )
}

export default App
