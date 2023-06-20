function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

    
}
init()


// gsap.from("#page3 h1",{
//   x:500,
//   scrollTrigger:{
//     trigger:"h1",
//     scroller:"#body",
//     start:"top 85%",
//     end:"top 77%",
    // markers:true,
//     scrub:2,


//   }
// })
gsap.to("#page3 h1",{
  x:70,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"#main",
    start:"top 80%",
    end:"top 35%",
    // markers:true,
    scrub:1,

  }
})
gsap.to("#page3 #box1",{
  x:70,
  scrollTrigger:{
    trigger:"#page3 #box1",
    scroller:"#main",
    start:"top 80%",
    end:"top 35%",
    // markers:true,
    scrub:1,

  }
})

gsap.to("#page3 h2",{
  x:-70,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"#main",
    start:"top 80%",
    end:"top 35%",
    // markers:true,
    scrub:1,

  }
})
gsap.to("#page3 #box2",{
  x:-70,
  scrollTrigger:{
    trigger:"#page3 #box1",
    scroller:"#main",
    start:"top 80%",
    end:"top 35%",
    // markers:true,
    scrub:1,

  }
})
gsap.to("#page1 #img2",{
  y:-100,
  scrollTrigger:{
    trigger:"#page1 #img2",
    scroller:"#main",
    start:"top 60%",
    end:"top 25%",
    // markers:true,
    scrub:1,

  }
})
gsap.to("#page1 h2",{
  x:-50,
  scrollTrigger:{
    trigger:"#page1 h2",
    scroller:"#main",
    start:"top 60%",
    end:"top 25%",
    // markers:true,
    scrub:1,

  }
})
gsap.to("#page1 h1",{
  x:50,
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"bottom 60%",
    end:"bottom 25%",
    // markers:true,
    scrub:1,

  }
})

var boll  = document.querySelector("#circle");
var body = document.querySelector("body")

window.addEventListener("mousemove",function(el){
  boll.style.left = el.x+('px');
  boll.style.top = el.y+('px');


})
// var bcircle = document.querySelector("#big-circle");
// var page2 = document.querySelector("#page2")
// page2.addEventListener("mousemove",function(el){
//   bcircle.style.left = el.x+('px');
//   bcircle.style.top = el.y+('px');

// })
gsap.to("#page1 h1",{
  scale:1,
  delay:1,
  duration:1,
})
gsap.to("#page1 h2",{
  scale:1,
  delay:1,
  duration:1,
})

gsap.to("#page4 #mdiv",{
  scale:3.5,
  scrollTrigger:{
    trigger:"#mdiv",
    scroller:"#main",
    start:"top 12%",
    end:"top -30%",
    // pin:"top 25%",
    // markers:true,
    scrub:0.3,

  }
})
gsap.to("#page4 #bdiv", {
  scrollTrigger: {
      trigger: "#bdiv",
      scroller: "#main",
      start: "top -10%",
      end: "top -60%",
      // markers: true,
      scrub: 3,
      pin: true,
}
})
gsap.to("#page4 #ldiv",{
  left:"20%",
  scrollTrigger:{
    trigger:"#ldiv",
    scroller:"#main",
    start:"top 22%",
    end:"top -30%",
    // markers:true,
    scrub:0.3,

  }
})
gsap.to("#page4 #rdiv",{
  right:"20%",
  scrollTrigger:{
    trigger:"#rdiv",
    scroller:"#main",
    start:"top 22%",
    end:"top -30%",
    // markers:true,
    scrub:0.3,

  }
})
gsap.to("#bdiv #mdiv>h2",{
  opacity:0,
  scrollTrigger:{
    trigger:"#mdiv>h2",
    scroller:"#main",
    start:"top 22%",
    end:"top 10%",
    // markers:true,
    scrub:0.3,

  }
})
gsap.to("#mdiv img",{
  opacity:0,
  scrollTrigger:{
    trigger:"#mdiv img",
    scroller:"#main",
    start:"top 52%",
    end:"top 10%",
    // markers:true,
    scrub:0.3,

  }
})