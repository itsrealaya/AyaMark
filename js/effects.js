/* ==========================================
   AyaMark v1.0
   Sakura Effect
========================================== */

const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resize);

resize();

const petals = [];

for(let i=0;i<40;i++){

    petals.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:2+Math.random()*4,

        s:1+Math.random()*2,

        w:Math.random()*2

    });

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    petals.forEach(p=>{

        ctx.beginPath();

        ctx.fillStyle="rgba(255,180,210,.85)";

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fill();

        p.y+=p.s;

        p.x+=Math.sin(p.y*.01)*p.w;

        if(p.y>canvas.height){

            p.y=-10;

            p.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(draw);

}

draw();
