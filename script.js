// expander
const projectPanel = document.querySelector('.project-panel')
const projectBackground = document.querySelector('.project-background')
const sectionTitle = document.querySelector('.section-title')

const expand = () => {
   projectBackground.classList.toggle('shrink')
   sectionTitle.classList.toggle('shrink')
}

projectPanel.addEventListener('click', expand)


// observer
