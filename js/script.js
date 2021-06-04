// import { chapterOne } from './chapter-one.js'

// // initialize chapters
// const ch1 = chapterOne()

// // ....


const tl = gsap.timeline();


tl.from("#zon", {
    duration: 1,
    delay: .5,
    y: 300,
    ease: "bounce.out"
})
.to(".golf", {
    duration: 2,
    y: 50,
    x: -100,
    repeat: -1,
    yoyo: true
}, "<")
.from(".stars", {
    duration: 1,
    opacity: 0,
    ease: "bounce.out"
}, "<.4")
