import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#c") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 500);
const gridHelper = new THREE.GridHelper(20, 20);
const scene = new THREE.Scene();

export default function () {
  scene.background = new THREE.Color(0x171717);

  camera.position.set(10, 10, 8);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const cameraControl = new OrbitControls(camera, renderer.domElement);

  scene.add(gridHelper);

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const helper = new THREE.DirectionalLightHelper(light, 5);
  scene.add(helper);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 0x7c3aed }),
  );
  scene.add(cube);
  /** rough ground */

  const properties = document.querySelector("#properties") as HTMLDivElement;
  const items = document.createElement("div");
  items.setAttribute("id", "items");
  properties.appendChild(items);
  scene.children.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.type;
    items.appendChild(listItem);
  });

  /** render starts */
  renderer.setAnimationLoop(animate);
  function animate() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cameraControl.update();
    renderer.render(scene, camera);
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
}
