// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero Fade Animation
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s ease";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    },300);

});

// Navbar Shadow
window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>30){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

nav.style.boxShadow="none";

}

});
// Reveal Animation

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

observer.observe(section);

});
