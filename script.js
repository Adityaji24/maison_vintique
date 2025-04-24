var tl = gsap.timeline()
tl.to("#sf #risti,#sf #ilm", {
     y: 100,       // 100px neeche se aayega
     delay: 1,
     duration: 1,
     ease: "power4.out"// smooth motion
})
.to("#s",{
     x: 250,
     duration: 1 
})
.to("#s",{
     x: 190,
     duration:2,
},"same")
.to("#f",{
     x: 130,
     duration: 2
},"same")
.to("#box",{
     opacity: 1,
     width: "170px",
     duration: 2
},"same")
.to("#box",{
     duration: 2,
     y: 300,
     delay: 1
},"opeone")
.to("#myVideo", {
     opacity: 1
 }, "opeone")
 .to("#myVideo", {
     scale: 1,
     width: "100%",
     height: "100%",
     top: 0,
     left: 0,
     position: "absolute",
     duration: 2
 })
.to("#page1 #imge, #abc h3",{
     opacity:1,
     stagger: 0.3
})
