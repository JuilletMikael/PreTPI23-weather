<template>
    <div ref="container"></div>
</template>
  
<script setup>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { ref, onMounted, defineProps } from 'vue';

    const props = defineProps({
        model : String,
        size : Number
    })

    const container = ref(null);

  
    onMounted(() => {
        // Créer une scène Three.js
        const scene = new THREE.Scene();

        // Créer une caméra Three.js
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;

        // Créer une lampe
        const light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);

        // Créer un rendu Three.js
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        container.value.appendChild(renderer.domElement);

        // Fonction pour redimensionner la scène Three.js
        const resize = () => {
            const { width, height } = container.value.getBoundingClientRect();
            renderer.setSize(width, width);
            camera.aspect = width / width;
            camera.updateProjectionMatrix();
        };

        // Redimensionner la scène Three.js lorsque la fenêtre est redimensionnée
        window.addEventListener('resize', resize);
        
        const loader = new GLTFLoader();

        // Ceation du model
        loader.load('../src/assets/models/' + props.model + '.glb', 
        function(gltf) {
            const modelCrated = gltf.scene;
            modelCrated.scale.set(1,1,1);
            scene.add(modelCrated);
        }, undefined, 
        function(error) {
            console.log(error);
        }
        )   ;

        // Animation de la scène Three.js
        const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        };
        animate();
    });
</script>