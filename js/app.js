/* ======================================
   AyaMark Premium Loading
====================================== */

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const loader = document.getElementById("loader");

/* Loading */

let value = 1;

const duration = 4000;
const interval = duration / 99;

const loading = setInterval(() => {

    value++;

    if (value > 100) value = 100;

    bar.style.width = value + "%";
    percent.textContent = value + "%";

    if (value >= 100) {

        clearInterval(loading);

        loader.style.transition = "opacity .4s";
        loader.style.opacity = "0";

        setTimeout(() => {

            window.location.href =
            "https://zyo.lol/nhuaobuddy";

        },400);

    }

}, interval);

/* ===========================
      Sakura Effect
=========================== */

const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = innerWidth;
    canvas.height = innerHeight;

}

resize();

window.addEventListener("resize",resize);

const petals=[];

for(let i=0;i<60;i++){

    petals.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        r:2+Math.random()*5,

        vx:(Math.random()-.5)*1.2,
        vy:1+Math.random()*2

    });

}

function draw(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    petals.forEach(p=>{

        ctx.beginPath();

        ctx.fillStyle="#ffb6d9";

        ctx.arc(
            p.x,
            p.y,
            p.r,
            0,
            Math.PI*2
        );

        ctx.fill();

        p.x+=p.vx;
        p.y+=p.vy;

        if(p.y>canvas.height){

            p.y=-20;

            p.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(draw);

}

draw();
