import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const scene = new THREE.Scene();
  const loader = new GLTFLoader();
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.createElement('canvas')
  });

export function Init(data) {

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);


  const light = new THREE.AmbientLight(0xffffff); // soft white light
  scene.add(light);

  FilterWeather(data);


  document.body.appendChild(renderer.domElement);
  
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export function FilterWeather(data){
  console.log(data.weather);
  var model;

  for (let i = 0; i <= 7; i++) {
    console.log(data.weather[i].totalSnow_cm)

    if (data.weather[i].totalSnow_cm > 0){
      model = "cloudSnow.glb";
    }

    CrateModel(model);
  }


}

function CrateModel(model){
  loader.load('../assets/models/' + model, function(gltf) {
    const modelCrated = gltf.scene;
    modelCrated.scale.set(1, 1, 1);
    modelCrated.position.y = 10;
    scene.add(modelCrated);
  }, undefined, function(error) {
    console.log(error);
  });
}