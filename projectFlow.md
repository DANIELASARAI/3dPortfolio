1. Setting up Project. Create and install the dependencies needed.
a. Vite. Create a react app with vite by npm create vite@latest ./ -- --template react
b. TailwindCSS. npm install -D tailwindcss and initialize it by npx tailwindcss init 
c. Three JS and other dependencies. npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
d. Assets for the project. Copy and paste some files to the public folder also for the assets and components folder.
e. Delete the App.css file and modify the App.js. 
f. Copy and paste the index.css file complete from repository. Fonts, tailwind.css and gradients. 
g. Also copy the styles.js file into src. 
h. And the tailwind.config.cjs for box shadows, screens and bckground img.
i. Into src, create utils folder and motion.js file into it. 
j. Create a new folder called constants, inside a file index.js. Close all the files and npm run dev. Hold ctrl and click  http://127.0.0.1:5173/. 
k. Inside BrowserRouter, put the components Navbar, Hero inside it, below, another div=> about, experience, tech and feedbacks, finnaly, cobtact and starscanvas.
2. Navbar goes, logo, name, about, work and contact. 
a. Import the stuff needed, remove div and replace it with <nav>. We can research these element classes on tailwindCSS.
b. Hero bg
c Computers.jsx 