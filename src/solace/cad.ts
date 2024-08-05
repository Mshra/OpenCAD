import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import canvas from "../ui/mainWindow/canvas/canvas";

const project = {
  renderer: new THREE.WebGLRenderer({ antialias: true, canvas }),
  camera: new THREE.PerspectiveCamera(75, 2, 0.1, 500),
  gridHelper: new THREE.GridHelper(20, 20),
  scene: new THREE.Scene(),
} as {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  gridHelper: THREE.GridHelper;
  scene: THREE.Scene;
};

project.scene.background = new THREE.Color(0x171717);

project.camera.position.set(10, 10, 8);
project.camera.lookAt(new THREE.Vector3(0, 0, 0));
const cameraControl = new OrbitControls(
  project.camera,
  project.renderer.domElement,
);

project.scene.add(project.gridHelper);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(-1, 2, 4);
project.scene.add(light);

/** start the rendering only if canvas is present. */
if (canvas) {
  project.renderer.setAnimationLoop(animate);
}

function animate() {
  if (resizeRendererToDisplaySize(project.renderer)) {
    const canvas = project.renderer.domElement;
    project.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    project.camera.updateProjectionMatrix();
  }
  cameraControl.update();
  project.renderer.render(project.scene, project.camera);
}

function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer): boolean {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = Math.floor(canvas.clientWidth * pixelRatio);
  const height = Math.floor(canvas.clientHeight * pixelRatio);
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
export default project;
