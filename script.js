
const nav=document.querySelector("nav");
const navbar=document.querySelector(".navbar");
const navContainer=document.querySelector(".nav-container");
// const containerproject=document.querySelector(".container-project");
const owlcarousel= document.querySelector(".owl-carousel");
window.addEventListener('scroll',()=>
{
    if(window.scrollY>=50)
    {
        nav.classList.add("sticky");
        
    }
    else
    {
        nav.classList.remove("sticky");
    }
}) 

// toggle menu 
const menubtn=document.querySelector(".menu-btn");
const cutbtn=document.querySelector(".cut-btn");
console.log(menubtn);
menubtn.addEventListener("click",()=>
{
    navContainer.classList.toggle("active");
    menubtn.classList.toggle("deactive");
    cutbtn.classList.toggle("cut-btn-active")
    
})

cutbtn.addEventListener("click",()=>
 {
     cutbtn.classList.toggle("cut-btn-active")
     menubtn.classList.toggle("deactive");
     navContainer.classList.toggle("active");
 })
 // typing script
 
  var typed=new Typed(".typing" ,
   {
      strings:["FullStack Developer","React Developer", "Coder", "Designer"],
      typeSpeed:110,
      backSpeed:70,
      loop:true
    });

 // slide up using button
 const scrollbtn=document.querySelector(".scroll-up-button");

 window.addEventListener("scroll",()=>
 {
     if(this.scrollY>500)
     {
        scrollbtn.classList.add("show");
     }
     else
     {
        scrollbtn.classList.remove("show");
     }
 })
const html=document.querySelector("html");
 scrollbtn.addEventListener("click",()=>
 {
     html.scrollTop=0;
     console.log("hi")
 })

//  $(containerproject).owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:2
//         }
//     }
// })

