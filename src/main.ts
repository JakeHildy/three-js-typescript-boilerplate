import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const sceneTwo = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
camera.position.z = 1.5;

const cameraTwo = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
cameraTwo.position.z = 1.5;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const canvasTwo = document.getElementById("canvasTwo") as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const rendererTwo = new THREE.WebGLRenderer({
  canvas: canvasTwo,
});

renderer.setSize(400, 300);
rendererTwo.setSize(400, 300);

new OrbitControls(camera, renderer.domElement);
new OrbitControls(cameraTwo, rendererTwo.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });

const cube = new THREE.Mesh(geometry, material);
const cubeTwo = new THREE.Mesh(geometry, material);
scene.add(cube);
sceneTwo.add(cubeTwo);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  rendererTwo.render(sceneTwo, cameraTwo);
}

animate();
