import { GLTFLoader } from
"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load(
  "./sushi.glb",
  (gltf) => {
    scene.add(gltf.scene);
  }
);