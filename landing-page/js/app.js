/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// const links = document.querySelectorAll('#section');
// links.forEach(link => {
//     link.addEventListener('click', () => {
//         links.forEach((link) =>{
//             links.className = "navbar__menu"   
//         });
       
//         link.classList.add("change");
//     });
// });

// const links = document.getElementById('nav');

// (function () {
//     window.NAV = {
//         $body: $("body"),
//         $subMenus: $(".subMenu"),
//         toggle: function (e) {
//             e.preventDefault();
//             NAV.$body.toggleClass("mainMenu-is-open");
//         },
//         bindEvents: function () {
//             $(".js-togglesOffCanvas").on("click", NAV.toggle);
//         },
//         init: function () {
//             NAV.bindEvents();
//         }
//     }
// })();
// NAV.init();




// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
// }
// const mainSection = document.querySelector('Section');

// mainSection.addEventListener('animationstart', function () {
//     console.log('The heading was clicked!');
// });

// let select = document.createElement("select");
// select.setAttribute('id' , 'mobile');

// let first = document.createElement("option");
// first.innerHTML = "Navigation";
// first.setAttribute('selected', 'selected');
// select.appendChild(first);

// let navbar__menu = document.getElementById('navbar__menu');
// let loadLinks = function (element, hyphen, level) {

//     let e = element;
//     let children = e.children;

//     for (let i = 0; i < e.children.length; ++i) {

//         let currentLink = children[i];

//         switch (currentLink.nodeName) {
//             case 'A':
//                 let option = document.createElement('option');
//                 option.innerHTML = (level++ < 1 ? '' : hyphen) + currentLink.innerHTML;
//                 option.value = currentLink.href;
//                 select.appendChild(option);
//                 break;
//             default:
//                 if (currentLink.nodeName === 'UL') {
//                     (level < 2) || (hyphen += hyphen);
//                 }
//                 loadLinks(currentLink, hyphen, level);
//                 break;
//         }
//     }
// }
// loadLinks(navbar__menu, '- ', 0);