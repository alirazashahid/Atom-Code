
    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll('section[id]');
      const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');
      const isTouchDevice = 'ontouchstart' in document.documentElement;
      let cursorTimeout;

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

      if (!isTouchDevice) {
          document.addEventListener('mousemove', TrackCursor);

          document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
          document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

          function TrackCursor(evt) {
              const w = site_wide_cursor.clientWidth;
              const h = site_wide_cursor.clientHeight;

              site_wide_cursor.style.transform = 
                  `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
              
              site_wide_cursor.style.display = 'block'; // Show cursor on mouse move
              resetCursorTimer();
          }

          function resetCursorTimer() {
              clearTimeout(cursorTimeout);
              cursorTimeout = setTimeout(() => {
                  site_wide_cursor.style.display = 'none';
              }, 2000);
          }

          resetCursorTimer();
      } else {
          site_wide_cursor.style.display = 'none';
      }

      window.addEventListener('scroll', scrollActive);

      const navbar = document.querySelector(".navbar");
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent);

      if (isMobile) {
          navbar.classList.add("hide-on-mobile");
      } else {
          navbar.classList.remove("hide-on-mobile");
      }
    });
 
  const colors = [
    {
      bg: `radial-gradient(at 30% 85%, #5DADE2 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F1948A 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #58D68D 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FAD7A0 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #AF7AC5 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F7DC6F 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #85C1E9 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #E8DAEF 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #76D7C4 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F5B041 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #BB8FCE 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #F9E79F 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #48C9B0 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #D98880 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #5DADE2 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FADBD8 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #E59866 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #7FB3D5 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #82E0AA 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FDEBD0 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #C39BD3 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F8C471 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #A3E4D7 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #E8F8F5 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #48C9B0 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F5CBA7 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #85C1E9 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #EBDEF0 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #7FB3D5 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #F7DC6F 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #58D68D 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FAD7A0 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #F8C471 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #48C9B0 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #AF7AC5 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #F5EEF8 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #58D68D 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #E59866 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #7FB3D5 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FDF2E9 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #BB8FCE 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #76D7C4 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #E59866 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #EBF5FB 0vw, transparent 50vw)`,
      text: '#1C2833',
    },
    {
      bg: `radial-gradient(at 30% 85%, #C39BD3 0vw, transparent 50vw),
           radial-gradient(at 85% 5%, #48C9B0 0vw, transparent 50vw),
           radial-gradient(at 60% 75%, #F8C471 0vw, transparent 50vw),
           radial-gradient(at 10% 10%, #FDFEFE 0vw, transparent 50vw)`,
      text: '#1C2833',
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
  document.addEventListener("DOMContentLoaded", () => {
    const atomBgDiv = document.querySelector('.atom-bg');

    // Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, atomBgDiv.clientWidth / atomBgDiv.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true makes the background transparent
    renderer.setSize(atomBgDiv.clientWidth, atomBgDiv.clientHeight);
    atomBgDiv.appendChild(renderer.domElement); // Append to atom-bg div

    // Set the scene's background to transparent
    scene.background = null;

    // Responsive scaling
    window.addEventListener('resize', () => {
        camera.aspect = atomBgDiv.clientWidth / atomBgDiv.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(atomBgDiv.clientWidth, atomBgDiv.clientHeight);
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
});
