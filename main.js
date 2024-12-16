* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html, body {
	cursor: none;
}


.custom-cursor {
    position: fixed;  /* Changed to fixed to cover the whole viewport */
    top: 0;
    left: 0;
    pointer-events: none;  /* Ensure the cursor doesn’t interfere with clickable elements */
    z-index: 9999;  /* Ensure it appears above all other elements */

}
.site-wide {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 2px solid black;
}

.site-wide .pointer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: black;
	transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}

.site-wide.active .pointer {
	width: 20px;
	height: 20px;
}
.custom-cursor.site-wide {
	pointer-events: none; /* Allow mouse events to pass through */
  }
  
.boxes {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.boxes .box {
	position: relative;
	width: 300px;
	height: 300px;
	overflow: hidden;
}

.boxes .box:nth-child(1) {
	background-color: palevioletred;
}

.boxes .box:nth-child(2) {
	background-color: palegreen;
}

.boxes .box:nth-child(3) {
	background-color: paleturquoise;
}

.box-bound {
	display: block;
	width: 100px;
	height: 50px;
	background-position: top left;
	background-size: contain;
	background-repeat: no-repeat;
	transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}

.box-bound.active {
	width: 150px;
	height: 75px;
}
body, html {
	margin: 0;
	padding: 0;
	height: 100%;
	overflow-y: scroll; /* Enable vertical scrolling */
	overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  body {
	font-family: Arial, sans-serif;
	color: rgb(68, 58, 58);
	text-align: center;
	font-size: 2em;
	position: relative;
	transition: background 0.8s, color 0.5s;
	background-color: rgb(161, 248, 241);
  }

  /* Motion Gradient Background with Blur */
  body::before {
	content: '';
	position: fixed;
	top: -10px;
	left: -10px;
	width: calc(100% + 20px);
	height: calc(100% + 20px);
	background-size: 300% 300%;
	animation: gradientAnimation 30s ease infinite;
	z-index: -1;
	filter: blur(20px);
  }

  @keyframes gradientAnimation {
	0% {
	  background-position: 0% 50%;
	}
	50% {
	  background-position: 100% 50%;
	}
	100% {
	  background-position: 0% 50%;
	}
  }
  .navbar {
display: flex;
position: sticky;
top: 0;
align-items: center;
justify-content: flex-start;
background-color: transparent;
padding: 10px 20px;
border-bottom: 1px solid rgba(204, 204, 204, 0);
z-index: 10;
box-shadow: 0px 0px 10px 2px black;
}

.navbar .logo img {
height: 40px;
border-radius: 20px;
box-shadow: 0px 0px 10px 2px black;
}

.navbar .menu-toggle {
display: none;
font-size: 1.4em;
color: white;
cursor: pointer;
margin-left: auto;
margin-top: -16px;
}

.navbar .menu-toggle span {
display: none;
font-size: 0.8em;
margin-left: 10px;
}

.navbar ul {
list-style: none;
display: flex;
margin: 0;
padding: 0;
text-shadow: 1px 3px 2px black;
}

.navbar ul li {
margin-left: 93px;
}

.navbar ul li a {
text-decoration: none;
color: #fff;
font-size: 1em;
transition: color 0.3s, transform 0.2s ease-in-out; /* Adjusted transition timing */
}

.navbar ul li a:hover {
color: #00aeff;
transform: translateY(-2px); /* Slight lift on hover */
}

/* Responsive Navbar */
@media (max-width: 767px) {
.navbar .menu-toggle {
  display: block;
}

.navbar .menu-toggle span {
  display: inline; /* Show the "Atom" text on mobile */
}

.navbar ul {
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 60px;
  left: 0;
  padding: 0;
}

.navbar ul.active {
  display: flex;
}

.navbar ul li {
  margin: 0;
  text-align: center;
  padding: 10px 0;
}
}


  .container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	padding: 20px;
	justify-items: center;
	max-width: 100%; /* Prevents the container from overflowing */
	margin: 0 auto;  /* Center the container */
  }

  .image-box {
	position: relative;
	width: 100%;
	max-width: 300px;
	height: auto;       /* Let the height adapt to the image */
	opacity: 0;
	transform: translateY(100px);
	animation: slideUp 1s forwards ease-out;
  }

  .image-box img {
	width: 100%;
	height: auto;       /* Maintain image aspect ratio */
	object-fit: cover;
	border-radius: 10px;
	transition: transform 0.3s, box-shadow 0.3s !important;
  }

  .image-box:hover img {
	transform: translateY(-10px);
	box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.6);
  }

  @keyframes slideUp {
	to {
	  transform: translateY(0);
	  opacity: 1;
	}
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
	width: 12px;  /* Adjust the width for a thicker scrollbar */
  }

  ::-webkit-scrollbar-track {
	background: rgba(255, 192, 203, 0);  /* Transparent track */
	border-radius: 10px;  /* Rounded corners for the track */
  }

  ::-webkit-scrollbar-thumb {
	background: linear-gradient(45deg, #00aeff, #a68eff);  /* Gradient color for the thumb */
	border-radius: 10px;  /* Rounded corners for the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
	background: linear-gradient(45deg, #00aeff, #8c74d6);  /* Slightly darker gradient on hover */
  }
  
