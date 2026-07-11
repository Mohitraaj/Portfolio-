// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});
});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.1)";

}else{

navbar.style.boxShadow="none";

}

});


// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// Hero Animation

window.onload=()=>{

const hero=document.querySelector(".hero-text");

hero.style.opacity="0";
hero.style.transform="translateY(50px)";

setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity="1";
hero.style.transform="translateY(0)";

},300);

};
