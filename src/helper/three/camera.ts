 import * as THREE from 'three' 
  
  const cameraSetting = {
    fieldOfView: 60,
    nearPlane: 1,
    farPlane: 2000,
    aspectRatio: window.innerWidth / window.innerHeight
  }
  const camera = new THREE.PerspectiveCamera(
    cameraSetting.fieldOfView,
    cameraSetting.aspectRatio,
    cameraSetting.nearPlane,
    cameraSetting.farPlane
  )
  camera.position.x = 0
  camera.position.z = 1000 
  camera.position.y = 300
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  export default camera