/* =========================
   AOS INITIALIZATION
========================= */

AOS.init({

    duration:1000,
    once:true,
    offset:100

});

/* =========================
   TYPED TEXT
========================= */

var typed = new Typed("#typed",{

    strings:[

        "ECE Student",
        "Web Developer",
        "IoT Enthusiast",
        "Frontend Developer",
        "Problem Solver"

    ],

    typeSpeed:70,
    backSpeed:50,
    backDelay:1500,
    loop:true

});

/* =========================
   NAVBAR EFFECT
========================= */

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(11,18,32,.95)";

        navbar.style.boxShadow =
        "0 0 20px rgba(34,197,94,.15)";

    }

    else{

        navbar.style.background =
        "transparent";

        navbar.style.boxShadow =
        "none";

    }

});

/* =========================
   ACTIVE MENU LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",

    function(e){

        e.preventDefault();

        document
        .querySelector(
        this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =========================
   HERO IMAGE TILT EFFECT
========================= */

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener(
"mousemove",

(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

const rotateY =
(-1/20 * x + 20);

const rotateX =
(1/20 * y - 20);

heroImage.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

heroImage.addEventListener(
"mouseleave",

()=>{

heroImage.style.transform =

"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

}

/* =========================
   PROJECT HOVER GLOW
========================= */

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener(
"mouseenter",

()=>{

card.style.boxShadow =
"0 0 30px rgba(34,197,94,.4)";

});

card.addEventListener(
"mouseleave",

()=>{

card.style.boxShadow =
"none";

});

});

/* =========================
   LOADING EFFECT
========================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log(
"Portfolio Loaded Successfully"
);