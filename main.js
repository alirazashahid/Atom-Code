// Site wide cursor
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

document.addEventListener('mouseenter', () => {
	site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
	site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
	const w = site_wide_cursor.clientWidth;
	const h = site_wide_cursor.clientHeight;

	site_wide_cursor.style.transform = 
		`translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
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

function TrackBoxCursor (evt) {
	const box = this;
	const cursor = box.querySelector('.custom-cursor');

	const boxRect = box.getBoundingClientRect();

	const x = evt.clientX - boxRect.left;
	const y = evt.clientY - boxRect.top;

	cursor.style.transform = `translate(${x}px, ${y}px)`;
}

    // Array of 3-color mesh gradients with appropriate text colors
    const colors = [
		{ 
		  bg: 'radial-gradient(circle at 30% 70%, #2E3192, #1BFFFF, #6a0572)', 
		  text: '#ffffff' 
		}, // Ocean Blue, with Purple
		{ 
		  bg: 'radial-gradient(circle at 60% 30%, #D4145A, #FBB03B, #ff69b4)', 
		  text: '#ffffff' 
		}, // Sanguine with Peach
		{ 
		  bg: 'radial-gradient(circle at 40% 60%, #009245, #FCEE21, #ffb300)', 
		  text: '#333333' 
		}, // Luscious Lime with Yellow
		{ 
		  bg: 'radial-gradient(circle at 70% 40%, #662D8C, #ED1E79, #ff1493)', 
		  text: '#ffffff' 
		}, // Purple Lake with Hot Pink
		{ 
		  bg: 'radial-gradient(circle at 50% 50%, #EE9CA7, #FFDDE1, #f7b7d0)', 
		  text: '#333333' 
		}, // Piglet with Light Pink
		{ 
		  bg: 'radial-gradient(circle at 30% 30%, #614385, #516395, #6a5acd)', 
		  text: '#ffffff' 
		}, // Kashmir with Blue Violet
		{ 
		  bg: 'radial-gradient(circle at 60% 60%, #02AABD, #00CDAC, #00bcd4)', 
		  text: '#ffffff' 
		}, // Green Beach with Turquoise
		{ 
		  bg: 'radial-gradient(circle at 40% 40%, #FF512F, #DD2476, #f44336)', 
		  text: '#ffffff' 
		}, // Bloody Mary with Red
		{ 
		  bg: 'radial-gradient(circle at 70% 70%, #FF5F6D, #FFC371, #ff7043)', 
		  text: '#333333' 
		}, // Sweet Morning with Coral
		{ 
		  bg: 'radial-gradient(circle at 50% 50%, #11998E, #38EF7D, #4caf50)', 
		  text: '#ffffff' 
		}  // Quepal with Green
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
  