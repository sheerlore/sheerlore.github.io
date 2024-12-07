import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState} from "react";
import { useFrame } from '@react-three/fiber';

export default function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    // const [rotate, setRotate] = useState(false)
    const [count, setCount] = useState(0)
    const geometry = useMemo(
        () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
        []
    )

    useEffect(() => {
        console.log(ref.current.geometry.uuid)
    })

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
        <mesh
            {...props}
            ref={ref}
            onPointerDown={() => setCount((count + 1) % 2)}
            geometry={geometry[count]}
        >
        </mesh>
    )
}