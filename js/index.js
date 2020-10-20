// Your code goes here

const navButtons = document.querySelectorAll('nav a')
navButtons[0].style.padding = '2%'
navButtons[0].style.borderRadius = '8px'
navButtons[0].style.width = '25%'
navButtons[0].style.textAlign = 'center'
navButtons[0].style.margin = '1%'
navButtons[0].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'PowderBlue'
})
navButtons[0].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white'
})

navButtons[1].style.padding = '2%'
navButtons[1].style.borderRadius = '8px'
navButtons[1].style.width = '25%'
navButtons[1].style.textAlign = 'center'
navButtons[1].style.margin = '1%'
navButtons[1].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'PowderBlue'
})
navButtons[1].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white'
})

navButtons[2].style.padding = '2%'
navButtons[2].style.borderRadius = '8px'
navButtons[2].style.width = '25%'
navButtons[2].style.textAlign = 'center'
navButtons[2].style.margin = '1%'
navButtons[2].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'PowderBlue'
})
navButtons[2].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white'
})

navButtons[3].style.padding = '2%'
navButtons[3].style.borderRadius = '8px'
navButtons[3].style.width = '25%'
navButtons[3].style.margin = '1%'
navButtons[3].style.textAlign = 'center'
navButtons[3].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'PowderBlue'
})
navButtons[3].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white'
})

const intro = document.querySelector('.intro img')

intro.addEventListener('dblclick', (e) => {
    e.target.style.width = '100%'
})

const  images = document.querySelectorAll('img')
images[0].addEventListener('click', (e) => {
    e.target.style.width = '20%'
})

document.addEventListener('keydown', (e) => {
    console.log('you pressed a key!')
})

const password = document.querySelector('.password')

password.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'PowderBlue'
})

password.addEventListener('blur', (e) => {
    e.target.style.background = ''
})

window.addEventListener('resize', (e) => {
    e.target.alert('window resizing')
})


const paragraph = document.querySelector('.intro p')

paragraph.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})

paragraph.addEventListener('wheel', (e) => {
    console.log('you scrolled')
})

