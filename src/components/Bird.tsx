import * as THREE from 'three'
import { useRef } from "react";

export default function Bird(props: JSX.IntrinsicElements['group']) {
    const threeRef = useRef<THREE.Group>(null!);
    const leftWingRef = useRef<THREE.Group>(null!);
    const rightWingRef = useRef<THREE.Group>(null!);

    const faceRef = useRef<THREE.Group>(null!)
    const leftEyeRef = useRef<THREE.Mesh>(null!);
    const rightEyeRef = useRef<THREE.Mesh>(null!);
    const leftIrisRef = useRef<THREE.Mesh>(null!);
    const rightIrisRef = useRef<THREE.Mesh>(null!);
    const beakRef = useRef<THREE.Mesh>(null!);
    const feather1Ref = useRef<THREE.Mesh>(null!);
    const feather2Ref = useRef<THREE.Mesh>(null!);
    const feather3Ref = useRef<THREE.Mesh>(null!);

    const yellowMat = {color: 0xffde79, flatShading: true}
    const whiteMat = {color: 0xffffff, flatShading: true}
    const blackMat = {color: 0x000000, flatShading: true}
    const orangeMat = {color: 0xff5535, flatShading: true}
    const rSegments = 4;
    const hSegments = 3;

    return (
        <group 
            {...props}
            ref={threeRef}
            position={[0, 0, 0]} 
            traverse={(obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            }}>
            {/* BODY */}
            <mesh position={[0, 70, 0]}>
                <cylinderGeometry args={[40, 70, 200, rSegments, hSegments]} />
                <meshLambertMaterial {...yellowMat} />
            </mesh>
            {/* WING */}
            <group ref={leftWingRef} position={[70, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh rotation={[-Math.PI/4, 0, 0]}>
                    <boxGeometry args={[60, 60, 5]} />
                    <meshLambertMaterial {...yellowMat} />
                </mesh>
            </group>
            <group ref={rightWingRef} position={[-70, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh rotation={[-Math.PI/4, 0, 0]}>
                    <boxGeometry args={[60, 60, 5]} />
                    <meshLambertMaterial {...yellowMat} />
                </mesh>
            </group>

            {/* FACE */}
            <group ref={faceRef}>
                {/* LEFT EYE */}
                <mesh ref={leftEyeRef} position={[-30, 120, 35]} rotation={[0, -Math.PI/4, 0]} >
                    <boxGeometry args={[60, 60, 10]} />
                    <meshLambertMaterial {...whiteMat} />
                </mesh>
                <mesh ref={leftIrisRef} position={[-30, 120, 40]} rotation={[0, -Math.PI/4, 0]} >
                    <boxGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial {...blackMat} />
                </mesh>

                {/* RIGHT EYE */}
                <mesh ref={rightEyeRef} position={[30, 120, 35]} rotation={[0, Math.PI/4, 0]}>
                    <boxGeometry args={[60, 60, 10]} />
                    <meshLambertMaterial {...whiteMat} />
                </mesh>
                <mesh ref={rightIrisRef} position={[30, 120, 40]} rotation={[0, Math.PI/4, 0]} >
                    <boxGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial {...blackMat} />
                </mesh>

                {/* BEAK */}
                <mesh ref={beakRef} position={[0, 70, 65]} rotation={[Math.PI/2, 0, 0]}>
                    <cylinderGeometry args={[0, 20, 20, 4, 1]} />
                    <meshLambertMaterial {...orangeMat} />
                </mesh>

                {/* FEATURE */}
                <mesh ref={feather1Ref} position={[0, 185, 55]} rotation={[Math.PI/4, 0, 0]} scale={[1.5, 1.5, 1]}>
                    <boxGeometry args={[10, 20, 5]} />
                    <meshLambertMaterial {...yellowMat} />
                </mesh>
                <mesh ref={feather2Ref} position={[20, 180, 50]} rotation={[Math.PI/4, 0, -Math.PI/8]}>
                    <boxGeometry args={[10, 20, 5]} />
                    <meshLambertMaterial {...yellowMat} />
                </mesh>
                <mesh ref={feather3Ref} position={[-20, 180, 50]} rotation={[Math.PI/4, 0, Math.PI/8]}>
                    <boxGeometry args={[10, 20, 5]} />
                    <meshLambertMaterial {...yellowMat} />
                </mesh>
            </group>
        </group>
    )
}