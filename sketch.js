function setup() {
  createCanvas(2000, 600);
}

function draw() {
  background(0);
}

function preload() {
  mercury = loadImage('pMercury.png');
  venus = loadImage('pVenus.png');
  earth = loadImage('pEarth.png');
  mars = loadImage('pMars.png');
  jupiter = loadImage('pJupiter.png');
  saturn = loadImage('pSaturn.png');
  uranus = loadImage('pUranus.png');
  neptune = loadImage('pNeptune.png');

}
  function setup() {
    background(0)
     image(mercury, 200, 400, 100, 100);
    image(venus, 400, 400, 100, 100);
    image(earth, 600, 400, 100, 100);
    image(mars, 800, 400, 100, 100);
    image(jupiter, 1000, 400, 100, 100);
    image(saturn, 1200, 400, 100, 100);
    image(uranus, 1400, 400, 100, 100);
    image(neptune, 1600, 400, 100, 100);
    
  } 
