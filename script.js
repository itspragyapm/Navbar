let navbar = document.querySelector(".navbar");
let searchbox = document.querySelector(".search-box .bx-search");
// <i class='bx bx-x-circle' ></i>
searchbox.addEventListener('click',()=>{
  navbar.classList.toggle('showInput');
  if(navbar.classList.contains('showInput')){
   searchbox.classList.replace("bx-search", "bx-x-circle")
  }
  else{
    searchbox.classList.replace("bx-x-circle","bx-search")
    
  }
})

//sodebar open and close code
let openBtn = document.querySelector('.navbar .bx-menu-alt-left');
let closeBtn = document.querySelector('.nav-links .bx-x-circle');
let sideBar = document.querySelector('.nav-links');

openBtn.addEventListener('click',() =>{
  sideBar.style.left ='0';
})
closeBtn.addEventListener('click',() =>{
  sideBar.style.left ='-100%';
})

//sidebar Submenue code
let htmlA = document.querySelector('.html-arrow');
htmlA.addEventListener('click',() =>{
  sideBar.classList.toggle('show1')
})

let moreA = document.querySelector('.more-arrow');
  moreA.addEventListener('click',() =>{
  sideBar.classList.toggle('show2')
});

let jsA = document.querySelector('.js-arrow');
jsA.addEventListener('click',() =>{
  sideBar.classList.toggle('show3')
  
});

