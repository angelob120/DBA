// // Selecting the necessary elements from the DOM
// const header = document.querySelector("[data-header]");
// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
// const navLinks = document.querySelectorAll("[data-navbar-link]");
// const goTopBtn = document.querySelector("[data-go-top]");

// // Event listener for toggling the mobile navigation menu
// navToggleBtn.addEventListener("click", function () {
//   this.classList.toggle("active");
//   header.classList.toggle("nav-active");
// });

// // Event listeners for closing the mobile navigation menu when a link is clicked
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     header.classList.toggle("nav-active");
//     navToggleBtn.classList.toggle("active");
//   });
// }

// // Event listener for showing/hiding the header and scroll-to-top button based on scroll position
// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }
// });

// // Event listeners for handling the Bootstrap collapse panels
// $('.panel-collapse').on('show.bs.collapse', function () {
//   $(this).siblings('.panel-heading').addClass('active');
// });

// $('.panel-collapse').on('hide.bs.collapse', function () {
//   $(this).siblings('.panel-heading').removeClass('active');
// });














// // services 

// document.addEventListener('DOMContentLoaded', function() {
//   // Smooth scroll to section when a navigation link is clicked
//   const navLinks = document.querySelectorAll('[data-navbar-link]');
//   navLinks.forEach(function(navLink) {
//     navLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       const target = this.getAttribute('href');
//       const section = document.querySelector(target);
//       const sectionOffset = section.offsetTop;
//       window.scrollTo({
//         top: sectionOffset,
//         behavior: 'smooth'
//       });
//     });
//   });

//   // Smooth scroll to top when the "Go to Top" button is clicked
//   const goTopButton = document.querySelector('[data-go-top]');
//   goTopButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.scrollTo({ top: 100, behavior: 'smooth' });
//   });
// });















'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



const getStartedBtn = document.querySelector('.btn.btn-primary[data-scroll-to]');

getStartedBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const target = document.querySelector(getStartedBtn.getAttribute('data-scroll-to'));
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }
});