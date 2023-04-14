/**
 * The JavaScript code you place here will be processed by esbuild, and the
 * output file will be created at `../theme/js/script.min.js` and enqueued in
 * `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */

// import gsap from "gsap";

// function checkMobile () {
//     if (!(window.innerWidth <= 767)) return console.log("This is NOT a Mobile Device")
//     if (window.innerWidth <= 767) return console.log('This is a Mobile Device')
// }

// checkMobile();


// document.addEventListener("DOMContentLoaded", () => {
//     if (!(window.innerWidth <= 767)) return console.log("This is NOT a Mobile Device")
//     if (window.innerWidth <= 767) return console.log('This is a Mobile Device')
// })

( function() {
    if (!(window.innerWidth <= 767)) return console.log("This is NOT a Mobile Device")
    if (window.innerWidth <= 767) return console.log('This is a Mobile Device')
})();

console.log(document.body.clientWidth)

// document.addEventListener("DOMContentLoaded", () => {

// 	const hasVisited = sessionStorage.getItem("hasVisited")
// 	// const splashDiv = document.querySelector("body div")
// 	// console.log(splashDiv)

// 	if(!hasVisited) {
// 		const splashDiv = document.querySelector("body div")
// 		splashDiv.setAttribute('id', 'splash-screen')

// 		setTimeout(() => {
// 		splashDiv.classList.add('hide');
// 		}, 1000);

// 		sessionStorage.setItem("hasVisited", true)

// 	} else if (hasVisited) {
// 		const splashDiv = document.querySelector("body div")
// 		splashDiv.setAttribute('id', 'splash-screen-alt')
// 	}

	
// 	// const splashScreen = document.getElementById('splash-screen');

// 	// setTimeout(() => {
// 	// 	splashScreen.classList.add('hide');
// 	// 	}, 1000);

// 	//Adds data attributes that are used for the dropdown
// 	var productLITag = document.getElementById("menu-item-353");
// 	var productLink = document.querySelector("#menu-item-353>a");
// 	var contactLITag = document.getElementById("menu-item-52");
// 	var contactLink = document.querySelector("#menu-item-52>a");

// 	productLITag.setAttribute("data-dropdown", "");
// 	productLink.setAttribute("data-dropdown-button", "");
// 	contactLITag.setAttribute("data-dropdown", "");
// 	contactLink.setAttribute("data-dropdown-button", "");

// 	dropdown();
// 	hamburgerMenu();
// 	navBarScroll();
// 	// listHover();
// 	// heroSlider();

// 	console.log("DOM Loaded");
// });

//Smooth Anchor Link Transiiton
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault();

// 		document.querySelector(this.getAttribute("href")).scrollIntoView({
// 			behavior: "smooth",
// 		});
// 	});
// });


