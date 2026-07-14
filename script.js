/*=========================================
        MOHIT RAAJ PORTFOLIO
=========================================*/

//==================== LOADER ====================

window.addEventListener("load", () => {

const loader = document.querySelector("#loader");

loader.classList.add("loader-hide");

setTimeout(() => {

loader.style.display = "none";

},800);

});

//==================== MOBILE MENU ====================

const menuBtn = document.querySelector("#menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.onclick = () =>{

navbar.classList.toggle("active");

menuBtn.classList.toggle("fa-xmark");

};

document.querySelectorAll(".navbar a").forEach(link=>{

link.onclick=()=>{

navbar.classList.remove("active");

menuBtn.classList.remove("fa-xmark");

};

});

//==================== STICKY HEADER ====================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

//==================== ACTIVE MENU ====================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

//==================== SCROLL TOP ====================

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
//==================== COUNTER ANIMATION ====================

const counters=document.querySelectorAll(".counter-box h2");

const speed=120;

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.innerText.replace("+","").replace("%","");

const update=()=>{

const current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/speed);

if(current<target){

counter.setAttribute("data-count",current+increment);

if(counter.innerText.includes("%")){

counter.innerText=(current+increment)+"%";

}else{

counter.innerText=(current+increment)+"+";

}

setTimeout(update,20);

}else{

if(counter.innerText.includes("%")){

counter.innerText=target+"%";

}else{

counter.innerText=target+"+";

}

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

//==================== REVEAL ANIMATION ====================

const revealElements=document.querySelectorAll(

".feature-card,.skill-card,.service-card,.portfolio-card,.testimonial-card,.info-box,.counter-box,.contact-box"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

revealElements.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});

//==================== SMOOTH BUTTON EFFECT ====================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});

//==================== IMAGE PARALLAX ====================

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});
//==================== TYPING EFFECT ====================

const titles=[
"Professional Video Editor",
"Content Creator"
];

const typingElement=document.querySelector(".hero-left h2");

if(typingElement){

let titleIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

const current=titles[titleIndex];

if(!deleting){

typingElement.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingElement.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

titleIndex=(titleIndex+1)%titles.length;

}

}

setTimeout(typeEffect,deleting?40:90);

}

typeEffect();

}

//==================== HEADER SHADOW ====================

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

//==================== IMAGE HOVER ====================

document.querySelectorAll(".portfolio-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=`perspective(1000px)
rotateX(${-(y-rect.height/2)/30}deg)
rotateY(${(x-rect.width/2)/30}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

//==================== PREVENT EMPTY FORM ====================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

//==================== PERFORMANCE ====================

window.addEventListener("pageshow",()=>{

document.body.style.opacity="1";

});

//==================== END ====================

console.log("%cMohit Raaj Portfolio Loaded Successfully","color:#ff2d55;font-size:18px;font-weight:bold;");
