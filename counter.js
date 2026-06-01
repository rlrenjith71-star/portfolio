/* =========================
   ANIMATED COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

counters.forEach(counter => {

const target =
+counter.getAttribute("data-target");

const updateCount = () => {

const count =
+counter.innerText;

const increment =
target / speed;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCount,15);

}

else{

counter.innerText = target;

}

};

updateCount();

});

};

/* =========================
   START ON SCROLL
========================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

},

{
threshold:0.5
}

);

const statsSection =
document.querySelector(".stats");

if(statsSection){

observer.observe(statsSection);

}