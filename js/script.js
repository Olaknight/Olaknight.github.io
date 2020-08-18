const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')



const csBar = document.querySelector('.bar-cs')
const webBar = document.querySelector('.bar-web')
const algoBar = document.querySelector('.bar-algo')
const sysBar = document.querySelector('.bar-sys')
const llsBar = document.querySelector('.bar-lls')



var t1 = new TimelineLite()

t1.fromTo(csBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
    .fromTo(webBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(algoBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(sysBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
    .fromTo(llsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)


const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i < links.length; i++){
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')
    for(i=0; i < categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')



}