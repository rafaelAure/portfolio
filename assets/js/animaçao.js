const home = document.querySelector('#home')
const arrowUp = document.querySelector('#arrow-up a ')
const homeHeight = home.offsetHeight
function changeHomeWhenScroll() {
  if (window.scrollY >= homeHeight) {
    //scroll é maior que a altura do header
    arrowUp.classList.add('scroll')
  } else {
    //menor que a altura do header
    arrowUp.classList.remove('scroll')
  }
}


window.addEventListener('scroll', function () {
  changeHomeWhenScroll()
})


/* ScrollReveal */

//TOP
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#header .container,
  
   #about .bloco-1--about,
   #services .bloco-services,
   #portfolio .projetos,
   #contato .container
  `,

  { interval: 200 }
)
// //BOTTOM
// const scrollRevealBottom = ScrollReveal({
//   origin: 'bottom',
//   distance: '60px',
//   duration: 700,
//   reset: true
// })

// scrollRevealBottom.reveal(
//   `
   
//    #depoimento .blocos-depoimentos, #depoimento 
//    .blocos-depoimentos
   
  
//   `,

//   { interval: 200 }
// )

// LEFT
const scrollRevealLeft = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollRevealLeft.reveal(
  `#home .bloco-1
 
  `,

  { interval: 200 }
)

//RIGHT
const scrollRevealRight = ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollRevealRight.reveal(
  `#home .bloco-3,
   #about .bloco-2--about
 
  `,

  { interval: 200 }
)



const menuMobile = document.querySelector('.menu-mobile')

menuMobile.addEventListener('click', ()=> {
  const opan = document.querySelector('#menu-mobileOpwn')
  opan.style.display = 'flex'
})

function closeMenuMobile() {
  let close = document.querySelector('#menu-mobileOpwn')

  close.style.display = 'none'

}