const burger = document.getElementById("burger");
const dd = document.getElementById("navbar");
const dd2= document.getElementById("navbar2");
const dd3 = document.getElementById("navbar3");
const dd4 = document.getElementById("navbar4");
const ul = document.getElementById("ulist")

burger.addEventListener('click', () => {
    console.log("CLicked")
    dd.classList.toggle("dropdown")
    dd2.classList.toggle("dropdown")
    dd3.classList.toggle("dropdown")
    dd4.classList.toggle("dropdown")
    
})