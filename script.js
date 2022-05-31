// expander
const projectPanel = document.querySelector('.project-panel')
const projectBackground = document.querySelector('.project-background')
const sectionTitle = document.querySelector('.section-title')

const expand = () => {
   projectBackground.classList.toggle('shrink')
   sectionTitle.classList.toggle('shrink')
}

projectPanel.addEventListener('click', expand)

// scroll
let scrollPosition = window.scrollY

const sectionOne = document.querySelector("#about")
const sectionTwo = document.querySelector("#projects")
const sectionThree = document.querySelector("#skills")
const sectionFour = document.querySelector("#contact")

const sectionOneHeight = sectionOne.offsetHeight
const sectionTwoHeight = sectionTwo.offsetHeight
const sectionThreeHeight = sectionThree.offsetHeight
const sectionFourHeight = sectionFour.offsetHeight

const nav = document.querySelector("nav")

const addClassOnScroll = () => {
    sectionOne.classList.add("stacking-slide")
    sectionTwo.classList.add("stacking-slide")
    sectionThree.classList.add("stacking-slide")
    sectionFour.classList.add("stacking-slide")
}

const removeClassOnScroll = () => {
    sectionOne.classList.remove("stacking-slide")
    sectionTwo.classList.remove("stacking-slide")
    sectionThree.classList.remove("stacking-slide")
    sectionFour.classList.remove("stacking-slide")
}

window.addEventListener('scroll', function() { 
    scrollPosition = window.scrollY;

    if (scrollPosition >= sectionOneHeight) { 
        addClassOnScroll() 
    }
    else { 
        removeClassOnScroll() 
    }
    // console.log(scrollPosition)
    // console.log(sectionOneHeight)
});