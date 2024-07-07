var tl= gsap.timeline();

tl.from("nav p , nav button , nav a",{
    y:-20,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
tl.from("#myname",{
    x:30,
    opacity:0,
    duration:0.6
})
tl.from("#herobtn",{
    y:30,
    opacity:0,
    duration:0.6
})
tl.from("#greets",{
    y:30,
    opacity:0,
    duration:0.6
})

var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:"#section2",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub:2
    }
})
tl2.from("#secondHeading",{
    x:-200,
    opacity:0,
    duration: 0.2
})

const welcome= document.querySelector("#greets");
const date = new Date();
const hours= date.getHours();
let greets;

 const greeting =()=>{
    if(hours < 12){
        welcome.innerText= `Good Morning from Pakistan `;
        welcome.style.color="red"
    } else if(hours < 18 ){
        welcome.innerText=`Good Afternoon from Pakistan`;
         welcome.style.color="green"
    } else{
        welcome.innerText= "Good Evening from Pakistan";
         welcome.style.color="green";
        
    }
 }
 greeting()
