
/*** add event on element*/

const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/** navbar toggle*/

const navbar = document.querySelector(".nav_container");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll(".nav_link");

const toggleNav = function () {
    navbar.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
}

addEventOnElement(navbarLinks, "click", closeNav);