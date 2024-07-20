// menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('ctaVideo');
    var fallbackImage = document.getElementById('fallbackImage');

    video.onerror = function() {
        video.style.display = 'none';
        fallbackImage.style.display = 'block';
    };

    video.oncanplay = function() {
        fallbackImage.style.display = 'none';
        video.style.display = 'block';
    };
});

// scroll
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom", 
    duration: 1000,
};

//header container
scrollRevealOptions().reveal(".header_content h1", {
    ...scrollRevealOptions,
});

scrollRevealOptions().reveal(".header_btn", {
    ...scrollRevealOptions,
    delay: 500,
});

//service container
scrollRevealOptions().reveal(".service_card", {
    ...scrollRevealOptions,
    interval: 500,
});