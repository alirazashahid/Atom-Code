const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

// Check if the device supports touch events (mobile devices)
const isTouchDevice = 'ontouchstart' in document.documentElement;

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
    }
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
    bg: `radial-gradient(at 30% 85%, rgb(153, 102, 204) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 182, 193) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(204, 78, 61) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 223, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(0, 128, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(64, 64, 64) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(64, 224, 208) 0px, rgb(255, 99, 71) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(204, 68, 102) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 215, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(0, 128, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(0, 255, 255) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(255, 183, 197) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(34, 139, 34) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(214, 85, 86) 0px, rgb(252, 249, 186) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(0, 128, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(128, 128, 128) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(72, 209, 204) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 127, 80) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(176, 224, 230) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(153, 50, 204) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(138, 43, 226) 0px, rgb(255, 215, 0) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(64, 224, 208) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 105, 180) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(72, 209, 204) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 140, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(173, 216, 230) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(255, 223, 186) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(219, 112, 147) 0px, rgb(60, 179, 113) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(0, 0, 255) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 255, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(255, 165, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 99, 71) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(176, 224, 230) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(0, 255, 255) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(255, 99, 71) 0px, rgb(255, 215, 0) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(250, 128, 114) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 228, 225) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(144, 238, 144) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(138, 43, 226) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(255, 250, 250) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(255, 228, 196) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(244, 164, 96) 0px, rgb(255, 160, 122) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(255, 99, 71) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(240, 128, 128) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(128, 128, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 255, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(255, 215, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(255, 140, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(255, 69, 0) 0px, rgb(255, 165, 0) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(139, 69, 19) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(255, 245, 238) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(70, 130, 180) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 99, 71) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(255, 228, 225) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(255, 222, 173) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(255, 160, 122) 0px, rgb(255, 215, 0) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
},

{
    bg: `radial-gradient(at 30% 85%, rgb(178, 34, 34) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 85% 5%, rgb(107, 142, 35) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 60% 75%, rgb(255, 140, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 75% 10%, rgb(255, 20, 147) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 25% 50%, rgb(0, 128, 0) 0px, transparent 50%) repeat scroll 0% 0%, 
         radial-gradient(at 80% 35%, rgb(255, 105, 180) 0px, transparent 50%) repeat scroll 0% 0%, 
         rgba(0, 0, 0, 0) radial-gradient(at 40% 50%, rgb(70, 130, 180) 0px, rgb(255, 228, 196) 50%) repeat scroll 0% 0%`,
    text: '#ffffff'
}

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
  
