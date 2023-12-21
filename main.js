document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerMenu = document.querySelector('.menu-button')


const mobileMenu = document.querySelector('.mobile-links')
const icon = document.querySelector('.menu-button i')

icon.addEventListener("click", () => {
    icon.classList.toggle("fa-x");
    icon.classList.toggle("fa-bars");
  });

hamburgerMenu.addEventListener('click', () =>{
    mobileMenu.classList.toggle('active')
})

})

// const searchLink = document.querySelector('.nav-links')
// const searchIcon = document.querySelector('i')

// searchLink.addEventListener('click', () => {
//     searchIcon.classList.toggle("fa-x");
//     searchIcon.classList.toggle("fa-search");
// })
