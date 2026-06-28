// ===========================
// SCROLL ANIMATION
// ===========================

const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});


// ===========================
// MARKETPLACE FILTER + SEARCH
// ===========================

let currentCategory = "all";

const searchInput = document.getElementById("search");

function filterArt(category, button) {

    currentCategory = category;

    document.querySelectorAll(".filter-buttons button").forEach(btn => {

        btn.classList.remove("active");

    });

    if(button){

        button.classList.add("active");

    }

    updateGallery();

}

if(searchInput){

    searchInput.addEventListener("keyup", updateGallery);

}

function updateGallery(){

    const searchValue = searchInput
        ? searchInput.value.toLowerCase()
        : "";

    const cards = document.querySelectorAll(".market-card");

    cards.forEach(card => {

        const matchesCategory =

            currentCategory === "all" ||

            card.classList.contains(currentCategory);

        const matchesSearch =

            card.innerText
                .toLowerCase()
                .includes(searchValue);

        if(matchesCategory && matchesSearch){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

    // Hide category headings with no visible cards

    document.querySelectorAll(".category-section").forEach(section => {

        const visibleCards = Array.from(

            section.querySelectorAll(".market-card")

        ).filter(card =>

            card.style.display !== "none"

        );

        if(visibleCards.length === 0){

            section.style.display = "none";

        }

        else{

            section.style.display = "block";

        }

    });

}


// ===========================
// LIGHTBOX
// ===========================

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const caption = document.getElementById("lightbox-caption");

const closeBtn = document.getElementById("close-lightbox");

if(lightbox && lightboxImg && caption && closeBtn){

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

}


// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",function(e){

        const email = document.querySelector("input[type=email]");

        if(email && !email.value.includes("@")){

            e.preventDefault();

            alert("Please enter a valid email address.");

        }

    });

}



// ===========================
// SCROLL TO TOP
// ===========================

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


// ===========================
// INITIAL LOAD
// ===========================

updateGallery();

