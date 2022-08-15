canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

// Set the size of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';

let direction = true;
let isDrawing = false;
let hue = 0;
let lastX = 0;
let lastY = 0;

function draw (e) {
    if (!isDrawing) return;
    
}
ctx.moveTo = (lastX, lastY);
ctx.lineTo = (e.offsetX, e.offsetY);
ctx.stroke();