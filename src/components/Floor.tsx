import { useRef } from 'react'
import * as THREE from 'three'


export default function Floor(props: JSX.IntrinsicElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)

    return (
        <mesh {...props} ref={meshRef} rotation-x={-Math.PI / 2} >
            <planeGeometry args={[100, 100]} />
            {/* <meshStandardMaterial /> */}
        </mesh>
    )
}