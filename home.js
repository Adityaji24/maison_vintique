gsap.registerPlugin(ScrollTrigger);

// =========================
// Hero & Section Headings
// =========================

gsap.to(".p1ttl h1", {
  opacity: 1,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

gsap.to(".p2ttl h1", {
  opacity: 1,
  y: -30,
  duration: 1,
  scrollTrigger: {
    trigger: ".p2ttl",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// =========================
// What's Trending Section
// =========================

gsap.from(".mbox", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: {
    each: 1,
    from: "start"
  },
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".p2ttl",
    start: "top 20%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(".mbox .box", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".p2ttl",
    start: "top 100%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(".mbox h4", {
  opacity: 1,
  y: -10,
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".p2ttl",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// =========================
// Back To Top Button
// =========================

gsap.to(".back-to-top", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 20%",
    toggleActions: "play none none reverse"
  }
});

// =========================
// Hover Animation for mbox
// =========================

document.querySelectorAll(".mbox").forEach(box => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box.querySelector("h4"), {
      y: -10,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  box.addEventListener("mouseleave", () => {
    gsap.to(box.querySelector("h4"), {
      y: -10,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// =========================
// Page 3 Pinning & Cards
// =========================

gsap.to(".page3", {
  scrollTrigger: {
    trigger: ".cardbox",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: 0.5,
  }
});

// Right card slide in
gsap.to(".cardbox .rcard1", {
  marginTop: "0vh",
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cardbox",
    start: "top top",
    end: "bottom 50%",
    scrub: 0.5,
    invalidateOnRefresh: true
  }
});

// Left card slide out
gsap.to(".cardbox .lcard1", {
  marginTop: "-100vh",
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cardbox",
    start: "top top",
    end: "bottom 50%",
    scrub: 0.5
  }
});

// =========================
// Left Card Text Animation
// =========================

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".lcard1",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

tl1.from(".lttl1 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
})
.from(".lcnt1 h4", {
  opacity: 0,
  scale: 0,
  y: 30,
  stagger: 0.3,
  duration: 0.6,
  ease: "power2.out"
})
.from(".lttl2 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
})
.from(".lcnt2 h4", {
  opacity: 0,
  scale: 0,
  y: 30,
  stagger: 0.3,
  duration: 0.6,
  ease: "power2.out"
}, "-=0.5");

// =========================
// ✅ NEW: Left Card 2 Animation (.lcard2)
// =========================

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".lcard2",
    start: "top 80%",
    end: "bottom 60%", // ✅ suitable end point
    toggleActions: "restart none none none",
    // markers: true // optional for debugging
  }
});

tl2.from(".lttl3 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
})
.from(".lcnt3 h4", {
  opacity: 0,
  scale: 0,
  y: 30,
  stagger: 0.3,
  duration: 0.6,
  ease: "power2.out"
})
.from(".lttl4 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
})
.from(".lcnt4 h4", {
  opacity: 0,
  scale: 0,
  y: 30,
  stagger: 0.3,
  duration: 0.6,
  ease: "power2.out"
});


//swipper js for crossel work
// var swiper=new Swiper(".swiper",{
// initialSlide:3,
// centeredSlide:true,
// loop:true,
// speed:900,
// grabCursor:true,
// allowTouchMove:false,
// effect:"coverflow",
// coverflowEffect:{
//   rotate:-10,
//   stretch:-45,
//   depth:90,
//   modifier:1,
//   slideShow:true,
// },
// mousewheel:{
//   thresholdDelta:50,
//   sensitivity:1,
// },
// pagination:{
//   el:"swipper-pagination",
// },
// breakpoints:{
// 0: {  slidesPerView:1,
//   spaceBetween:20,},
//   600:{
//     slidesPerView:3,
//   },
//   1200:{
//     slidesPerView:5,
//   }
// },

// })

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//gsap effect for page 6 boxes


function animateBoxes(boxesSelector, delayOffset = 0) {
  const boxes = gsap.utils.toArray(boxesSelector);

  boxes.forEach((box, index) => {
    const angle = (index - (boxes.length - 1) / 2) * 15; // spread like a fan
    gsap.set(box, {
      transformOrigin: "50% 200%", // simulate circular path
      rotate: angle,
      y: 100,
      opacity: 0,
      scale: 0.6,
    });

    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      rotate: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: index * 0.1 + delayOffset,
    });
  });
}

animateBoxes(".p6box div");
animateBoxes(".p7box div", 0.2); // delayed second row