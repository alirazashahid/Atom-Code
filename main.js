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
      bg: `radial-gradient(at 30% 85%, #89CFF0 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #F4C2C2 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #98FF98 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #E6E6FA 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #FFE5B4 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #FFFACD 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #B0E0E6 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #FFC0CB 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #C8A2C8 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #CCCCFF 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #F8B195 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #87CEEB 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #F4C2C2 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #FFE5B4 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #98FF98 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #E6E6FA 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #FFFACD 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #C8A2C8 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #B0E0E6 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #89CFF0 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #F8B195 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #FFC0CB 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #FFE5B4 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #FFFACD 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #F8B195 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #CCCCFF 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #98FF98 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #87CEEB 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #F4C2C2 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #FFE5B4 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #C8A2C8 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #B0E0E6 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #FFFACD 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
    },
    {
      bg: `radial-gradient(at 30% 85%, #E6E6FA 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 85% 5%, #F8B195 0px, transparent 50%) repeat scroll 0% 0%, 
           radial-gradient(at 60% 75%, #89CFF0 0px, transparent 50%) repeat scroll 0% 0%`,
      text: '#333333',
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
