/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var hover0 = document.querySelector(".hoverimg0");
var hover1 = document.querySelector(".hoverimg1");
var hover2 = document.querySelector(".hoverimg2");
var hover3 = document.querySelector(".hoverimg3");
var hover4 = document.querySelector(".hoverimg4");

var img0 = document.querySelector(".img0hover");
var img1 = document.querySelector(".img1hover");
var img2 = document.querySelector(".img2hover");
var img3 = document.querySelector(".img3hover");
var img4 = document.querySelector(".img4hover");


hover0.addEventListener('mouseover', function() {
  img0.src = "images/00DinnerB.png";
  img0.classList.add("testclass");
});

hover0.addEventListener('mouseout', function() {
  img0.src = "images/00Dinner.png";
  img0.classList.remove("testclass");
});


hover1.addEventListener('mouseover', function() {
  img1.src = "images/01EnjoinB.png";
  img1.classList.add("testclass");
});

hover1.addEventListener('mouseout', function() {
  img1.src = "images/01Enjoin.png";
  img1.classList.remove("testclass");
});


hover2.addEventListener('mouseover', function() {
  img2.src = "images/02ArtB.png";
  img2.classList.add("testclass");
});

hover2.addEventListener('mouseout', function() {
  img2.src = "images/02Art.png";
  img2.classList.remove("testclass");
});


hover3.addEventListener('mouseover', function() {
  img3.src = "images/03TransaviaB.png";
  img3.classList.add("testclass");
});

hover3.addEventListener('mouseout', function() {
  img3.src = "images/03Transavia.png";
  img3.classList.remove("testclass");
});


hover4.addEventListener('mouseover', function() {
  img4.src = "images/04NemoB.png";
  img4.classList.add("testclass");
});

hover4.addEventListener('mouseout', function() {
  img4.src = "images/04Nemo.png";
  img4.classList.remove("testclass");
});

console.log("hello");
