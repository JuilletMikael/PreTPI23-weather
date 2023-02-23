import '../assets/css/style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const scene = new THREE.Scene();
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer(
  {
    canvas: document.querySelector('#app')
  }
);

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);


const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const cloud = loader.load( '../assets/models/cloud/scene.gltf', function ( gltf ) {

  const cloud = gltf.scene;

  console.log(cloud)

	scene.add( cloud );

}, undefined, function ( error ) {

	console.error( error );

} );

function animate (){
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();