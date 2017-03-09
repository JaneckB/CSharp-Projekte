var squareRadius = 50; //verändert den Radius der Ellipse

function setup() {
    createCanvas(800, 600); //verändert die Größe des Arbeitsfensters
    colorMode(RGB, 255);
    background(0);
    smooth();
    frameRate(60);
}

function draw() {
    square(mouseX, mouseY, ellipseRadius, ellipseRadius);
}