let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".piedra", 10, { y: -300 })
  .to(".chica", 10, { y: -200 }, "-=10")
  .fromTo(".fondo", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".contenido", 10, { top: "0%" }, "-=10")
  .fromTo(".contenido-img", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".texto", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
  
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
