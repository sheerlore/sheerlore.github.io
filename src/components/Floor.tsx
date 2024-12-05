import { useRef } from 'react'
import * as THREE from 'three'


export default function Floor(props: JSX.IntrinsicElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)

    return (
        <mesh {...props} ref={meshRef} position={[0, -33, 0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[1000, 1000]} />
            <meshLambertMaterial  />
        </mesh>
    )
}