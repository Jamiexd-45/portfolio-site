// LOADER
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000);
  }, 1500);
};

// FAKE CHART
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 150;

let x = 0;

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.moveTo(0,75);

  for(let i=0;i<300;i++){
    let y = 75 + Math.sin((i + x) * 0.05) * 20;
    ctx.lineTo(i,y);
  }

  ctx.strokeStyle = "#00ffcc";
  ctx.stroke();

  x++;
  requestAnimationFrame(draw);
}

draw();