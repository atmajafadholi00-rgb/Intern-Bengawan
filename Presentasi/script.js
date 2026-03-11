function scrollToSection(){

document.querySelector('#about').scrollIntoView({
behavior:'smooth'
});

}


/* SCROLL ANIMATION */

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible')
}
})
},{
threshold:0.2
})

document.querySelectorAll('.fade').forEach(section=>{
observer.observe(section)
})


/* NAVBAR CHANGE ON SCROLL */

window.addEventListener("scroll",function(){

const nav = document.querySelector("nav")

if(window.scrollY > 50){
nav.classList.add("scrolled")
}else{
nav.classList.remove("scrolled")
}

})


/* ACTIVE MENU HIGHLIGHT */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("nav a")

window.addEventListener("scroll",()=>{

let current = ""

sections.forEach(section=>{
const sectionTop = section.offsetTop - 150
const sectionHeight = section.clientHeight

if(scrollY >= sectionTop){
current = section.getAttribute("id")
}
})

navLinks.forEach(link=>{
link.classList.remove("active")

if(link.getAttribute("href") === "#"+current){
link.classList.add("active")
}

})

})