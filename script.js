// expander
const projects = document.querySelector('.projects')
const projectContainer = document.querySelector('#projects')
const sectionTitle = document.querySelector('.section-title')

const expand = () => {
    projectContainer.style.gridTemplateColumns = '10% 90%';
    sectionTitle.classList.add('rotate')
}

projects.addEventListener('click', expand)


// observer
