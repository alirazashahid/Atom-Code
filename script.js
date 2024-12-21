// Select the container
const container = document.getElementById("scene-container");

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 30;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Style the container using JavaScript (similar to CSS)
container.style.position = "absolute";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100%";
container.style.height = "100%";

// Central glowing sphere (like the sun)
const nucleusGeometry = new THREE.SphereGeometry(2, 32, 32);
const nucleusMaterial = new THREE.MeshPhongMaterial({
  color: 0xff6347,
  emissive: 0xff0000,
  emissiveIntensity: 0.6,
});
const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
scene.add(nucleus);

// Lighting for the scene
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Create small glowing shapes (orbiting objects)
function createGlowingShape(radius, orbitAngle) {
  const shapeGroup = new THREE.Group();

  // Create the glowing shape
  const shapeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
  const shapeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const shape = new THREE.Mesh(shapeGeometry, shapeMaterial);

  // Glowing effect for each shape
  const glowGeometry = new THREE.SphereGeometry(0.5, 16, 16);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.5,
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);

  shapeGroup.add(shape);
  shapeGroup.add(glow);

  // Save the shape's initial radius and orbit angle
  shapeGroup.userData = { radius: radius, angle: Math.random() * Math.PI * 2, orbitAngle: orbitAngle };

  return shapeGroup;
}

// Orbit tracks
function createOrbit(radius, orbitAngle) {
  const orbitGeometry = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
  const orbitMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    opacity: 0.2,
    transparent: true,
  });
  const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
  orbit.rotation.x = Math.PI / 2;
  orbit.rotation.z = orbitAngle; // Set the orbit angle dynamically

  return orbit;
}

// Add shapes and orbits
const shapeGroups = [];
const orbitRadii = [5, 8, 11, 14];

orbitRadii.forEach((radius, index) => {
  const orbitAngle = (index * Math.PI) / 4; // Different angles for each orbit
  scene.add(createOrbit(radius, orbitAngle)); // Orbit is created dynamically for each radius

  for (let i = 0; i < 2; i++) { // 2 shapes per orbit
    const shapeGroup = createGlowingShape(radius, orbitAngle);
    scene.add(shapeGroup);
    shapeGroups.push(shapeGroup);
  }
});

// Mouse interactivity
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate nucleus
  nucleus.rotation.y += 0.005;

  // Update shapes
  shapeGroups.forEach((shapeGroup) => {
    shapeGroup.userData.angle += 0.02; // Speed of shape orbiting

    // Update position of shape based on orbit radius and angle
    const { radius, angle, orbitAngle } = shapeGroup.userData;

    // The position of the shape in 3D space
    shapeGroup.position.x = radius * Math.cos(angle) * Math.cos(orbitAngle);
    shapeGroup.position.y = radius * Math.cos(angle) * Math.sin(orbitAngle);
    shapeGroup.position.z = radius * Math.sin(angle);

    // Update the orbit angle based on the shape's position
    shapeGroup.userData.orbitAngle += 0.005; // Adjust this value to control the orbit speed
  });

  // Smooth camera movement with mouse
  camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
  camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
// AbortController
// AbortController
// animate
// AnimationPlaybackEventa
// animate
const uls = document.querySelectorAll("ul");

uls.forEach((ul) => {
  const resetClass = ul.parentNode.getAttribute("class");
  const lis = ul.querySelectorAll("li");

  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget;

      if (
        target.classList.contains("active") ||
        target.classList.contains("follow")
      ) {
        return;
      }

      ul.parentNode.setAttribute(
        "class",
        `${resetClass} ${target.getAttribute("data-where")}-style`
      );

      lis.forEach((item) => clearClass(item, "active"));

      setClass(target, "active");
    });
  });
});

function clearClass(node, className) {
  node.classList.remove(className);
}

function setClass(node, className) {
  node.classList.add(className);
}
