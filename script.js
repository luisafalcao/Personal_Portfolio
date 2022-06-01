// expander //
const projects = document.querySelector('#projects')
const projectPanel = document.querySelector('.project-panel')
const projectBackground = document.querySelector('.project-background')
const sectionTitle = document.querySelector('.section-title')
const projectLinks = document.querySelectorAll('.project-link')
const asides = document.querySelectorAll('aside')
const closeBtn = document.querySelector('.close-btn')

for (let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('click', function(){
        projectBackground.classList.add('shrink')
        projectPanel.classList.add('expand')
        sectionTitle.classList.add('shrink')
        
        for (let j = 0; j < asides.length; j++) {
            if (j === i) {
                asides[j].classList.add('visible')
            } else {
                asides[j].classList.remove('visible')
            }
        }
    })
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
                projectBackground.classList.remove('shrink')
                projectPanel.classList.remove('expand')
                sectionTitle.classList.remove('shrink')
                
                for (let j = 0; j < asides.length; j++) {
                    asides[j].classList.remove('visible')
                }
            } else {
                // nav.classList.remove('appear');
            }
        })
    }, projectPanelShrinkOptions);
    
    // observed object
    projectPanelShrink.observe(projects);
} else {
    // not supported
}





// scroll
// const sections = document.querySelectorAll('section')

// const sectionOneHeight = sections[0].offsetHeight
// const sectionTwoHeight = sections[1].offsetHeight
// const sectionThreeHeight = sections[2].offsetHeight
// const sectionFourHeight = sections[3].offsetHeight

// const nav = document.querySelector("nav")

// const addClassOnScroll = () => {
//     for (let i = 0; i < sections.length; i++) {
//         sections[i].classList.add('stacking-slide');
//     }
// }

// const removeClassOnScroll = () => {
//     for (let i = 0; i < sections.length; i++) {
//         sections[i].classList.remove('stacking-slide');
//     }
// }

// window.addEventListener('scroll', function() { 
//     let scrollPosition = window.scrollY;

//     for (let i = 0; i < sections.length; i++) {
//         if (scrollPosition >= sections[i].offsetHeight) {
//             addClassOnScroll() 
//         } else {
//             removeClassOnScroll() 
//         }
//     }
// });

