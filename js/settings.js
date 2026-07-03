/* ==========================================
   AyaMark v1.0
   Settings
========================================== */

const body=document.body;

function setTheme(theme){

body.classList.remove(

"theme-purple",

"theme-blue",

"theme-black",

"light"

);

if(theme!=="default"){

body.classList.add(theme);

}

localStorage.setItem(

"theme",

theme

);

}

const saved=

localStorage.getItem("theme");

if(saved){

setTheme(saved);

}

/* Music */

const music=

localStorage.getItem("music");

if(music==="off"){

if(window.audio){

audio.pause();

}

}

/* Background */

const bg=

localStorage.getItem("background");

if(bg==="off"){

const v=

document.getElementById("bgVideo");

if(v){

v.pause();

}

}
