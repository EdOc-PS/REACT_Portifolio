//header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 50) 
       header.classList.toggle("expand")
    
})
