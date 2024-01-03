var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// flower
ctx.beginPath();
ctx.arc(100, 140, 25, 0, Math.PI * 2, false);  // Center circle
ctx.fillStyle = "yellow";
ctx.fill();

//  stem
ctx.beginPath();
ctx.moveTo(100, 180);
ctx.lineTo(100, 150);
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.stroke();

//  petals
ctx.beginPath();
ctx.arc(100, 140, 25, 0, Math.PI * 2, false);  // Center circle
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(80, 155, 15, 0, Math.PI, false);  // Left petal
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 155, 15, 0, Math.PI, false);  // Right petal
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 125, 15, 0, Math.PI * 2, false);  // Bottom petal
ctx.fillStyle = "yellow";
ctx.fill();

//  center dot
ctx.beginPath();
ctx.arc(100, 140, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "brown";
ctx.fill();


var canvas = document.getElementById("myCanvas2");
var ctx2 = canvas.getContext("2d");  // Using ctx2 as the context

//  the house
ctx2.fillStyle = "brown";
ctx2.fillRect(50, 100, 100, 100);  // Main house body

ctx2.fillStyle = "red";
ctx2.fillRect(75, 50, 50, 50);  // Roof

ctx2.fillStyle = "yellow";
ctx2.fillRect(65, 150, 20, 20);  // Door

ctx2.fillStyle = "black";
ctx2.fillRect(95, 150, 10, 20);  // Door handle

ctx2.beginPath();
ctx2.arc(85, 115, 5, 0, Math.PI * 2, false);  // Window
ctx2.fillStyle = "blue";
ctx2.fill();

ctx2.beginPath();
ctx2.moveTo(45, 150);
ctx2.lineTo(55, 100);
ctx2.lineTo(145, 100);
ctx2.lineTo(155, 150);
ctx2.closePath();
ctx2.fillStyle = "green";
ctx2.fill();  // Grass

var canvas = document.getElementById("myCanvas3");
var ctx3 = canvas.getContext("2d");  

//  car body
ctx3.fillStyle = "blue";
ctx3.fillRect(50, 75, 100, 50);

//  wheels
ctx3.beginPath();
ctx3.arc(75, 150, 15, 0, Math.PI * 2, false);
ctx3.fillStyle = "black";
ctx3.fill();
ctx3.beginPath();
ctx3.arc(125, 150, 15, 0, Math.PI * 2, false);
ctx3.fill();

//  the windows
ctx3.fillStyle = "cyan";
ctx3.fillRect(65, 95, 30, 20);
ctx3.fillRect(105, 95, 30, 20);

//  the roof
ctx3.fillStyle = "white";
ctx3.beginPath();
ctx3.moveTo(50, 75);
ctx3.lineTo(100, 50);
ctx3.lineTo(150, 75);
ctx3.lineTo(150, 100);
ctx3.lineTo(50, 100);
ctx3.closePath();
ctx3.fill();


var canvas = document.getElementById("myCanvas4");
    var ctx4 = canvas.getContext("2d");

    // Body
    ctx4.fillStyle = "brown";
    ctx4.beginPath();
    ctx4.moveTo(100, 100); // Starting point at the center
    ctx4.arc(100, 100, 50, 0, Math.PI * 2, true); // Full circle body
    ctx4.closePath();
    ctx4.fill();

    // Eyes
    ctx4.fillStyle = "yellow";
    ctx4.beginPath();
    ctx4.arc(70, 80, 10, 0, Math.PI * 2, true); // Left eye
    ctx4.arc(130, 80, 10, 0, Math.PI * 2, true); // Right eye
    ctx4.closePath();
    ctx4.fill();

    // Pupils
    ctx4.fillStyle = "black";
    ctx4.beginPath();
    ctx4.arc(75, 82, 5, 0, Math.PI * 2, true); // Left pupil
    ctx4.arc(135, 82, 5, 0, Math.PI * 2, true); // Right pupil
    ctx4.closePath();
    ctx4.fill();

    // Beak
    ctx4.fillStyle = "orange";
    ctx4.beginPath();
    ctx4.moveTo(100, 120);
    ctx4.lineTo(70, 150);
    ctx4.lineTo(130, 150);
    ctx4.closePath();
    ctx4.fill();

// Wings
    ctx4.fillStyle = "lightbrown";
    ctx4.beginPath();
    ctx4.moveTo(70, 100); // Left wing starting point
    ctx4.quadraticCurveTo(50, 70, 30, 100); // Left wing curve
    ctx4.lineTo(30, 130); // Left wing bottom
    ctx4.lineTo(60, 160); // Left wing end point
    ctx4.closePath();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.moveTo(130, 100); // Right wing starting point
    ctx4.quadraticCurveTo(150, 70, 170, 100); // Right wing curve
    ctx4.lineTo(170, 130); // Right wing bottom
    ctx4.lineTo(140, 160); // Right wing end point
    ctx4.closePath();
    ctx4.fill();


    
var canvas = document.getElementById("myCanvas5");
    var ctx5 = canvas.getContext("2d");

// Body
            ctx5.fillStyle = "#8B4513"; // SaddleBrown
            ctx5.fillRect(90, 90, 20, 40);

            // Wings
            ctx5.fillStyle = "#6495ED"; // CornflowerBlue
            ctx5.beginPath();
            ctx5.moveTo(100, 90);
            ctx5.quadraticCurveTo(120, 60, 140, 90);
            ctx5.lineTo(120, 120);
            ctx5.lineTo(100, 90);
            ctx5.moveTo(100, 90);
            ctx5.quadraticCurveTo(80, 60, 60, 90);
            ctx5.lineTo(80, 120);
            ctx5.lineTo(100, 90);
            ctx5.fill();

            // Antennae
            ctx5.strokeStyle = "#000";
            ctx5.lineWidth = 2;
            ctx5.beginPath();
            ctx5.moveTo(100, 90);
            ctx5.lineTo(80, 70);
            ctx5.moveTo(100, 90);
            ctx5.lineTo(120, 70);
            ctx5.stroke();


var canvas = document.getElementById("myCanvas6");
var ctx6 = canvas.getContext("2d");

// Base layer
ctx6.fillStyle = "#f5e9d3"; // Light brown
ctx6.beginPath();
ctx6.moveTo(50, 180);
ctx6.arc(100, 180, 50, 0, 2 * Math.PI);
ctx6.closePath();
ctx6.fill();

// Middle layer
ctx6.fillStyle = "#ffd5a1"; // Light yellow
ctx6.beginPath();
ctx6.moveTo(60, 130);
ctx6.arc(100, 130, 40, 0, 2 * Math.PI);
ctx6.closePath();
ctx6.fill();

// Top layer
ctx6.fillStyle = "#f7e5bc"; // Off-white
ctx6.beginPath();
ctx6.moveTo(70, 90);
ctx6.arc(100, 90, 30, 0, 2 * Math.PI);
ctx6.closePath();
ctx6.fill();

// Icing
ctx6.fillStyle = "#ffffff"; // White
ctx6.beginPath();
ctx6.arc(100, 70, 30, 0, Math.PI);
ctx6.lineTo(100, 60);
ctx6.closePath();
ctx6.fill();

// Candle
ctx6.fillStyle = "orange";
ctx6.fillRect(95, 40, 10, 20);
ctx6.fillStyle = "yellow";
ctx6.beginPath();
ctx6.arc(100, 55, 5, 0, 2 * Math.PI);
ctx6.closePath();
ctx6.fill();




var canvas = document.getElementById("myCanvas7");
var ctx7 = canvas.getContext("2d");

// Base
ctx7.fillStyle = "#FFD700"; // Gold color
ctx7.fillRect(0, 150, 200, 50);

// Stem
ctx7.fillStyle = "#A52A2A"; // Reddish-brown color
ctx7.fillRect(90, 0, 20, 150);

// Cup
ctx7.beginPath();
ctx7.moveTo(50, 150);
ctx7.lineTo(50, 50);
ctx7.quadraticCurveTo(100, 0, 150, 50);
ctx7.lineTo(150, 150);
ctx7.closePath();
ctx7.fillStyle = "#C0C0C0"; // Silver color
ctx7.fill();

// Handles
ctx7.fillStyle = "#FFD700";
ctx7.beginPath();
ctx7.arc(70, 110, 10, 0, 2 * Math.PI);
ctx7.arc(130, 110, 10, 0, 2 * Math.PI);
ctx7.closePath();
ctx7.fill();



var canvas = document.getElementById("myCanvas8");
var ctx8 = canvas.getContext("2d");

// Box
ctx8.fillStyle = "#C60C30"; // Red color
ctx8.fillRect(40, 40, 120, 120);

// Ribbon
ctx8.fillStyle = "#FFD700"; // Gold color
ctx8.fillRect(60, 60, 20, 80);
ctx8.fillRect(120, 60, 20, 80);

// Bow
ctx8.beginPath();
ctx8.arc(100, 80, 20, 0, Math.PI); // Top loop
ctx8.closePath();
ctx8.fill();
ctx8.beginPath();
ctx8.arc(100, 120, 20, 0, Math.PI); // Bottom loop
ctx8.closePath();
ctx8.fill();

// Ribbon tails
ctx8.moveTo(40, 100);
ctx8.lineTo(60, 80);
ctx8.lineTo(60, 120);
ctx8.closePath();
ctx8.fill();
ctx8.moveTo(160, 100);
ctx8.lineTo(140, 80);
ctx8.lineTo(140, 120);
ctx8.closePath();
ctx8.fill();