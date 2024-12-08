import { Canvas, useFrame} from "@react-three/fiber"
import { Center, Environment, Stats} from "@react-three/drei"
import { Vector3 } from "three"
import Button from "./components/Button"

const vec = new Vector3()

function Rig() {
  return useFrame(({camera, pointer}) => {
    vec.set(pointer.x * 2, pointer.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas camera={{position: [0, 0, 10]}} >
          <Environment preset="forest" background />
          <Center>
            {[...Array(5).keys()].map((x: number) => 
              [...Array(3).keys()].map((y: number) => (
                <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
              ))
            )}
          </Center>
          <Rig />
          <Stats />
        </Canvas>
      </div>
    </>
  )
}

export default App
