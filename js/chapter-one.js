
// export const chapterOne = () => {
//     console.log('Chapter 1');
// }

const tl = gsap.timeline();

const zon = document.getElementsByClassName("zon"); 

tl.from("#zon", {
    duration: 1,
    y: 500,
    ease: "bounce.out"
})