// variables
const projects = document.querySelector('#projects')
const container = document.querySelector('#container')
const projectPanel = document.querySelector('.project-panel')
const projectBackground = document.querySelector('.project-background')
const sectionTitle = document.querySelector('.section-title')
const projectNav = document.querySelector('.project-nav')
const projectLinks = document.querySelectorAll('.project-nav ul .project-name')
const projectTypes = document.querySelectorAll('.project-type')
const seeMore = document.querySelector('.more')
const allProjects = document.querySelector('#all-projects')
const asides = document.querySelectorAll('aside')
const closeBtn = document.querySelector('.close-btn')
const sections = document.querySelectorAll('section')
const navbar = document.querySelector('nav')


// expander //
const expander = (expandEl, shrinkEl) => {
    const elementWithFullWidthExists = document.querySelectorAll('.full-width').length > 0;
    const elementWithZeroWidthExists = document.querySelectorAll('.zero-width').length > 0;
    
    if (elementWithFullWidthExists || elementWithZeroWidthExists) {
        let elementWithFullWidth = document.querySelector('.full-width');
        let elementWithZeroWidth = document.querySelector('.zero-width')

        elementWithFullWidth.classList.remove('full-width');
        elementWithFullWidth.classList.add('zero-width');

        elementWithZeroWidth.classList.remove('zero-width');
        elementWithZeroWidth.classList.add('full-width')
    } else {
        expandEl.classList.toggle('full-width');
        shrinkEl.classList.toggle('zero-width');
    }

    if (projectBackground.classList.contains('zero-width')) {
        projectNav.classList.add('inline')
    } else {
        projectNav.style.display = "none"
    }

    for (let type = 0; type < projectTypes.length; type++) {
        projectTypes[type].classList.add('hide')
    }

    sectionTitle.classList.add('slide')
    
}

// click on links
for (let link = 0; link < projectLinks.length; link++) {
    projectLinks[link].addEventListener('click', function(){

        for (let project = 0; project < asides.length; project++) {
            if (project === link) {
                asides[project].classList.add('visible')
            } else {
                asides[project].classList.remove('visible')
            }
        } 

        if (projectPanel.classList.contains('full-width')) {
            return
        } else {
            expander(projectPanel, projectBackground)
        }
    })
}

// click on see more
seeMore.addEventListener('click', function(){
    expander(projectBackground, projectPanel)
})

// for (let link = 0; link < projectLinks.length; link++) {
//     projectLinks[link].addEventListener('click', function(){
//         projectBackground.classList.add('shrink')
//         projectPanel.classList.add('expand')
//         sectionTitle.classList.add('shrink')
//         projectNav.classList.add('inline')

//         for (let type = 0; type < projectTypes.length; type++) {
//             projectTypes[type].classList.add('hide')
//         }

//         for (let project = 0; project < asides.length; project++) {
//             if (project === link) {
//                 asides[project].classList.add('visible')
//             } else {
//                 asides[project].classList.remove('visible')
//             }
//         }        
//     })
// }

// shrinker //
const shrinker = () => {
    projectBackground.classList.remove('shrink')
    projectPanel.classList.remove('expand')
    sectionTitle.classList.remove('shrink')
    projectNav.classList.remove('inline')

    for (let j = 0; j < asides.length; j++) {
        asides[j].classList.remove('visible')
    }
}

// observers //
if ('IntersectionObserver' in window) {
    // shrink expanded project panel on scroll //
    // options
    const projectPanelShrinkOptions = {
        rootMargin: '-100px',
    };
    
    // observer
    const projectPanelShrink = new IntersectionObserver(function(
        entries, 
        projectPanelShrink
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                shrinker()
            }
        })
    }, projectPanelShrinkOptions);
    
    // observed object
    projectPanelShrink.observe(projects);
} else {
    // not supported
}

// scroll spy //
document.addEventListener('DOMContentLoaded', function(){ 
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // functions to add and remove the active class from links as appropriate
    const makeActive = link => {
        navLinks[link].classList.add("active");
    }
    const removeActive = link => {
        navLinks[link].classList.remove("active");
    }
    const removeAllActive = () => {
        [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    }
    
    // change the active link a bit above the actual section
    // this way it will change as you're approaching the section rather
    // than waiting until the section has passed the top of the screen
    const sectionMargin = 200;
    
    // keep track of the currently active link
    // use this so as not to change the active link over and over
    // as the user scrolls but rather only change when it becomes
    // necessary because the user is in a new section of the page
    let currentActive = 0;
  
    // listen for scroll events
    window.addEventListener("scroll", () => {
      
      // check in reverse order so we find the last section
      // that's present - checking in non-reverse order would
      // report true for all sections up to and including
      // the section currently in view
      //
      // Data in play:
      // window.scrollY    - is the current vertical position of the window
      // sections          - is a list of the dom nodes of the sections of the page
      //                     [...sections] turns this into an array so we can
      //                     use array options like reverse() and findIndex()
      // section.offsetTop - is the vertical offset of the section from the top of the page
      // 
      // basically this lets us compare each section (by offsetTop) against the
      // viewport's current position (by window.scrollY) to figure out what section
      // the user is currently viewing
      const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
  
      // only if the section has changed
      // remove active class from all menu links
      // and then apply it to the link for the current section
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  }, false);