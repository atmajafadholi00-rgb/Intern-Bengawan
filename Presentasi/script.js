/* SCROLL BUTTON */

function scrollToSection() {
  const aboutSection = document.querySelector("#about");

  if (aboutSection) {
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

/* WAIT UNTIL DOM IS READY */

document.addEventListener("DOMContentLoaded", () => {

/* FADE ANIMATION (Intersection Observer) */

const fadeSections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

fadeSections.forEach(section => {
  observer.observe(section);
});

/* NAVBAR CHANGE ON SCROLL*/

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});

/* ACTIVE MENU HIGHLIGHT */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


});

/*FEATURE DESCRIPTION TOGGLE */

function showFeature(id) {

  const infos = document.querySelectorAll(".feature-info");

  infos.forEach(info => {
    info.classList.remove("active");
  });

  const selectedFeature = document.getElementById(id);

  if (selectedFeature) {
    selectedFeature.classList.add("active");
  }

}