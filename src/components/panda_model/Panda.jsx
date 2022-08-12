import { useEffect } from 'react'
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
    glftLoader.load('src/assets/Panda.gltf', gltfScene => {
      loadedModel = gltfScene
      console.log(loadedModel)

      gltfScene.scene.rotation.y = Math.PI / 8
      gltfScene.scene.position.y = 3
      gltfScene.scene.scale.set(10, 10, 10)
      test.scene.add(gltfScene.scene)
    })

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01
        loadedModel.scene.rotation.y += 0.01
        loadedModel.scene.rotation.z += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}

export default Panda
