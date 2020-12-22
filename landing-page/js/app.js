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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarULElement = document.querySelector('#navbar__list');
let  liElements = navbarULElement.getElementsByTagName("li");


/*---------------------------------*/

// build the nav

sections.forEach(section => {
    const liElement = document.createElement('li');
    const anchorElement = document.createElement('a');
 
    // Add css class
    anchorElement.classList.add('menu__link');
    
    // get the data-nav attribute content
    anchorElement.textContent = section.getAttribute('data-nav');

    // Add links to sections
    anchorElement.href = '#' + section.id;

    // Add a to li
    liElement.appendChild(anchorElement)

    // Add li to ul
    navbarULElement.appendChild(liElement);

})

/*---------------------------------*/

// //** */ Add class 'active' to section when near top of viewport
onscroll = function() {
  let scrollPosition = document.documentElement.scrollTop;
  let section_Index ;
  
  sections.forEach((section, index) => {

    if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.5 &&  
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight *0.5) {

        // Add the active class to the section 
      section.classList.add('your-active-class')

      // Add active class to the anchor tag of active section in the viewport
      liElements[index].getElementsByTagName("a")[0].classList.add('active')

    } else {
      // Remove the classes
      section.classList.remove('your-active-class')
      liElements[index].getElementsByTagName("a")[0].classList.remove('active')
    }
  })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

/*---------------------------------*/
//** Scroll to section on link click

const Scroll = (event) => {
  event.preventDefault();
  const target = event.currentTarget.getAttribute("href"); // get where to go
  console.log(target);
  console.log(document.querySelector(target).offsetTop);
  window.scrollTo({
    top: document.querySelector(target).offsetTop,
    behavior: "smooth"
  });
}

// loop all the list items
for (let i = 0; i < liElements.length; i++) {
  // get the anchor tag from the list element and add event on it 
  liElements[i].getElementsByTagName("a")[0].addEventListener('click', Scroll)
}
