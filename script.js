var cursr=document.querySelector("#cursor");
var blurCursor=document.querySelector("#blur-Effect");

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cursr.style.scale=3;
        cursr.style.border="1px solid white";
        cursr.style.backgroundColor="transparent";

    })
    ele.addEventListener("mouseleave",function(){
        cursr.style.scale=1;
        cursr.style.border="0px solid white";
        cursr.style.backgroundColor="white";
        
    })
})

document.addEventListener("mousemove",function(mData){
    cursr.style.left=mData.x+"px";
    cursr.style.top=mData.y+"px";
    blurCursor.style.left=mData.x-100+"px";
    blurCursor.style.top=mData.y-100+"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon-first",{
    y:-50,
    x:-40,
    scrollTrigger:{
        trigger:"#colon-first",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:4
    }
})

gsap.from("#colon-second",{
    y:50,
    x:40,
    scrollTrigger:{
        trigger:"#colon-first",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:4
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})