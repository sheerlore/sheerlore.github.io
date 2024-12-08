import { useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from 'three'


export default function Button(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const [selected, setSelected] = useState(false)
    const black = new THREE.Color('black')
    const colorTo = useMemo(() => new THREE.Color(Math.floor(Math.random() * 16777216)), [])

    useFrame(() => {
        if (!ref.current) return
        ref.current.rotation.x = hovered
            ? THREE.MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
            : THREE.MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

        ref.current.rotation.z = selected
            ? THREE.MathUtils.lerp(ref.current.rotation.z, 0, 0.025)
            : THREE.MathUtils.lerp(ref.current.rotation.z, -3, 0.025)
        
        if (ref.current.material instanceof THREE.MeshPhysicalMaterial) {
            ref.current.material.color.lerp(selected ? colorTo : black, 0.025)
        }
    })

    return (
        <mesh
            {...props}
            ref={ref}
            onPointerDown={() => {
                setSelected(!selected)
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <icosahedronGeometry />
            <meshPhysicalMaterial
                roughness={0}
                metalness={0}
                thickness={3.12}
                ior={1.74}
                transmission={1.0}
            />
        </mesh>
    )
}