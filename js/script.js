const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

function filterArt(category, button){

    const cards = document.querySelectorAll(".market-card");

    cards.forEach(card=>{

        if(category==="all"|| card.classList.contains(category)){

            card.style.display="block";

        }

        else if(card.classList.contains(category)){

            card.style.display="none";

        }

        else{

            card.style.display="none";

        }

    });

    const buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(button => {

    button.classList.remove("active");

});

event.target.classList.add("active");

}


  
//......

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".market-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)
?"block":"none";

});

});

//lightbox

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const caption = document.getElementById("lightbox-caption");

const closeBtn = document.getElementById("close-lightbox");

document.querySelectorAll(".gallery-img").forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

        caption.textContent=image.alt;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

const email=document.querySelector("input[type=email]").value;

if(!email.includes("@")){

e.preventDefault();

alert("Please enter a valid email.");

}

});

const subscribe=document.getElementById("subscribeBtn");

subscribe.onclick=function(){

alert("Thank you for joining Roots & Canvas!");

}

// Scroll to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

