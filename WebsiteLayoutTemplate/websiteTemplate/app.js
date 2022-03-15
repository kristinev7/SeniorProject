const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const path = document.querySelector(".path");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();
/* chain multiple animations */

tl.fromTo(grid, 1, {height: "0%"}, {height: '80%', ease: Power2.easeInOut})
.fromTo(grid, 1.2, {width:'100%'}, {width:'80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:'-100%'}, {x: '0%', ease: Power2.easeInOut})