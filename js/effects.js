/* ==========================================
   AyaMark v1.0
   Effects
========================================== */

const canvas=document.getElementById("sakura");

if(canvas){

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const petals=[];

for(let i=0;i<45;i++){

petals.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:2+Math.random()*4,

vy:1+Math.random()*2,

vx:(Math.random()-.5),

});

}

function render(){

ctx.clearRect(0,0,canvas.width,canvas.height);

petals.forEach(p=>{

ctx.beginPath();

ctx.fillStyle="rgba(255,185,210,.85)";

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y+=p.vy;

p.x+=p.vx;

if(p.y>canvas.height){

p.y=-10;

p.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(render);

}

render();

}
