


const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
  
    // Detect if the user is on a mobile device
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Add a class to hide the navbar for mobile users
      navbar.classList.add("hide-on-mobile");
    } else {
      // Ensure the navbar is visible for desktop users
      navbar.classList.remove("hide-on-mobile");
    }
  });
  
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

// Check if the device supports touch events (mobile devices)
const isTouchDevice = 'ontouchstart' in document.documentElement;

let cursorTimeout;

if (!isTouchDevice) {
    // Only run cursor code for non-touch devices (PC or large screens)
    document.addEventListener('mouseenter', () => {
        site_wide_cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        site_wide_cursor.style.display = 'none';
    });

    // Track cursor movement for the whole document
    document.addEventListener('mousemove', TrackCursor);

    document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
    document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

    function TrackCursor(evt) {
        const w = site_wide_cursor.clientWidth;
        const h = site_wide_cursor.clientHeight;

        site_wide_cursor.style.transform = 
            `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
        
        // Show cursor on movement and reset the timer
        site_wide_cursor.style.display = 'block';
        resetCursorTimer();
    }

    // Function to hide the cursor after a delay
    function resetCursorTimer() {
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            site_wide_cursor.style.display = 'none';
        }, 2000); // 2-second delay
    }

    // Start the timer initially
    resetCursorTimer();
} else {
    // Disable custom cursor for touch devices
    site_wide_cursor.style.display = 'none';
}

// Box Bound Cursors
const boxes = document.querySelectorAll('.boxes .box');

for (let i = 0; i < boxes.length; i++) {
	const box = boxes[i];
	const cursor = box.querySelector('.custom-cursor');

	box.addEventListener('mouseenter', () => {
		site_wide_cursor.style.display = 'none';
	});

	box.addEventListener('mouseleave', () => {
		site_wide_cursor.style.display = 'block';
	});

	document.addEventListener('mousemove', TrackBoxCursor.bind(box));

	document.addEventListener('mousedown', () => cursor.classList.add('active'));
	document.addEventListener('mouseup', () => cursor.classList.remove('active'));
}
function TrackBoxCursor(evt) {
	const box = this;
	const cursor = box.querySelector('.custom-cursor');
  
	const boxRect = box.getBoundingClientRect();
  
	const x = evt.pageX - boxRect.left - window.scrollX;
	const y = evt.pageY - boxRect.top - window.scrollY;
  
	cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
  const colors = [
    {
      bg: `radial-gradient(at 20% 70%, #2C2C2C 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 10%, #8B0000 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 50% 50%, #006400 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 80%, #4B0082 0px, transparent 30%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 25% 75%, #4B0082 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 90% 15%, #00008B 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 60%, #654321 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 30% 90%, #2C2C2C 0px, transparent 30%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 10% 30%, #2F4F4F 0px, transparent 70%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 20%, #8B4513 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 55% 65%, #483D8B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 40% 85%, #191970 0px, transparent 30%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 15% 50%, #191970 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 25%, #8B0000 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 50% 50%, #006400 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 70%, #4B0082 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 30% 80%, #2C2C2C 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 20% 60%, #2C2C2C 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 75% 20%, #4B0082 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #00008B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 90% 30%, #006400 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 40% 50%, #191970 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 30% 70%, #2F4F4F 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 25%, #8B4513 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 50% 60%, #483D8B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 85%, #8B0000 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 25% 90%, #654321 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 10% 40%, #191970 0px, transparent 70%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 30%, #8B0000 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 55% 55%, #006400 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 40% 60%, #4B0082 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 40%, #2C2C2C 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 20% 50%, #2C2C2C 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 15%, #4B0082 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 50%, #00008B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 80%, #006400 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 30% 70%, #191970 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 25% 75%, #2F4F4F 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 20%, #8B4513 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 50% 65%, #483D8B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 90%, #8B0000 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 20% 85%, #654321 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 10% 30%, #191970 0px, transparent 70%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 20%, #8B0000 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 55% 60%, #006400 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 40% 70%, #4B0082 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 50%, #2C2C2C 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 15% 55%, #2C2C2C 0px, transparent 60%) repeat scroll 0% 0%, 
           radial-gradient(at 75% 10%, #4B0082 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 50%, #00008B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 80% 70%, #006400 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 30% 80%, #191970 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
    {
      bg: `radial-gradient(at 20% 60%, #2F4F4F 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 25%, #8B4513 0px, transparent 40%) repeat scroll 0% 0%, 
           radial-gradient(at 50% 60%, #483D8B 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 70% 85%, #8B0000 0px, transparent 30%) repeat scroll 0% 0%, 
           radial-gradient(at 25% 90%, #654321 0px, transparent 20%) repeat scroll 0% 0%`,
      text: '#CCCCCC',
    },
  ];
  
	  let currentIndex = 0;
  
	  function changeColor() {
		// Get the current gradient color object
		const color = colors[currentIndex];
		
		// Apply the background gradient and text color
		document.body.style.background = color.bg;
		document.body.style.color = color.text;
  
		// Move to the next color in the array, loop back to 0 if at the end
		currentIndex = (currentIndex + 1) % colors.length;
	  }
	  const cursor = document.getElementById("cursor");
  // Disable custom cursor for mobile devices
if (window.innerWidth <= 767) {
	document.querySelector('.custom-cursor').style.display = 'none';
	document.removeEventListener('mousemove', TrackCursor);
  }
  // Scene, Camera, and Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true makes the background transparent
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the scene's background to transparent
scene.background = null;

// Responsive scaling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Texture Loader for Fire Effect
const textureLoader = new THREE.TextureLoader();
const fireTexture = textureLoader.load('https://threejs.org/examples/textures/lava/cloud.png');

// Custom Shader Material for Glow Effect
const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
        glowColor: { value: new THREE.Color(0xff4400) },
        viewVector: { value: camera.position }
    },
    vertexShader: `
      uniform vec3 viewVector;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(viewVector - position);
        intensity = pow(0.8 - dot(vNormal, vNormel), 4.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      void main() {
        gl_FragColor = vec4(glowColor, intensity);
      }
    `,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true
});

// Central Sphere with Glow
const mainGeometry = new THREE.SphereGeometry(1, 32, 32);
const centralSphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff3300, emissive: 0xff1100 });
const centralSphere = new THREE.Mesh(mainGeometry, centralSphereMaterial);
const centralGlow = new THREE.Mesh(mainGeometry, glowMaterial);
centralGlow.scale.set(1.3, 1.3, 1.3);
scene.add(centralSphere, centralGlow);

// Light setup
const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft light
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 2, 50);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Small glowing spheres
const smallSphereGeometry = new THREE.SphereGeometry(0.4, 16, 16);
const smallSphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff8800, emissive: 0xff5500 });
const transparentMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, opacity: 0, transparent: true });
const orbitRadius = 6;
const smallSpheres = [];
const orbitAngles = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6); // 12 evenly distributed angles

orbitAngles.forEach((angle, index) => {
    // Small Sphere
    const material = (index === 3 || index === 9) ? transparentMaterial : smallSphereMaterial;
    const smallSphere = new THREE.Mesh(smallSphereGeometry, material);
    const speedMap = {
        8: 0.015,
        9: 0.014,
        10: 0.013,
        11: 0.012,
        12: 0.011
    };
    const speed = speedMap[index] || (0.01 + index * 0.003); // Adjusted speeds for 9, 10, 11, and 12
    smallSphere.userData = { angle, speed }; // Assign calculated speed
    smallSpheres.push(smallSphere);
    scene.add(smallSphere);

    // Removed number label creation
    // if (index !== 3 && index !== 9) {
    //     const canvas = document.createElement('canvas');
    //     const context = canvas.getContext('2d');
    //     canvas.width = 64;
    //     canvas.height = 64;
    //     context.fillStyle = 'white';
    //     context.font = '32px Arial';
    //     context.textAlign = 'center';
    //     context.textBaseline = 'middle';
    //     context.fillText(index + 1, 32, 32);

    //     const texture = new THREE.CanvasTexture(canvas);
    //     const labelMaterial = new THREE.SpriteMaterial({ map: texture });
    //     const label = new THREE.Sprite(labelMaterial);
    //     label.scale.set(1.5, 1.5, 1.5);
    //     label.position.set(0, 1, 0); // Position slightly above the sphere
    //     smallSphere.add(label);
    // }
});

// Camera Position
camera.position.z = 15;

// Mouse or Touch Controls for Rotation
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotation = { x: 0, y: 0 };

function onMouseDown(event) {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
}
function onMouseUp() { isDragging = false; }
function onMouseMove(event) {
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y,
        };
        rotation.x += deltaMove.y * 0.005;
        rotation.y += deltaMove.x * 0.005;
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the central sphere and glow
    centralSphere.rotation.y += 0.005;
    centralGlow.rotation.y += 0.005;
    scene.rotation.x = rotation.x;
    scene.rotation.y = rotation.y;

    // Update small spheres' positions
    smallSpheres.forEach((sphere, index) => {
        sphere.userData.angle += sphere.userData.speed; // Update angle
        sphere.position.x = orbitRadius * Math.cos(sphere.userData.angle) * Math.cos(orbitAngles[index]);
        sphere.position.y = orbitRadius * Math.sin(sphere.userData.angle) * Math.sin(orbitAngles[index]);
        sphere.position.z = orbitRadius * Math.sin(sphere.userData.angle) * Math.cos(orbitAngles[index]);
    });

    renderer.render(scene, camera);
}

animate();
