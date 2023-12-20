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

