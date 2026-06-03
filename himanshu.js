// SELECT ALL SECTIONS
const sections = document.querySelectorAll("section");

// SELECT NAV LINKS
const navLinks = document.querySelectorAll(".nav-links a");

// SCROLL EVENT
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

});

// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");

    } else {

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    }

});

// CLOSE MENU WHEN LINK IS CLICKED
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});