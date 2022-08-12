import { useEffect } from 'react'

import * as THREE from 'three'
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import SceneInit from './SceneInit'

function Panda() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas')
    test.initialize()
    test.animate()

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel
    const glftLoader = new GLTFLoader()
    glftLoader.load('http://127.0.0.1:5500/public/Panda.glb', gltfScene => {
      loadedModel = gltfScene
      console.log(loadedModel)

      gltfScene.scene.rotation.y = Math.PI / 8
      gltfScene.scene.position.y = 3
      gltfScene.scene.scale.set(10, 10, 10)
      test.scene.add(gltfScene.scene)
    })
  }, [])

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}

export default Panda
