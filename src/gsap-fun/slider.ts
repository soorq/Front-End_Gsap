import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slider = () => {
  const container = document.querySelector(".main")!;
  const _tl = gsap.timeline();

  _tl.fromTo("#second", { x: "-100%", y: "+100%" }, { y: "0" });
  _tl.fromTo("#third", { x: "-100%" }, { x: "-200%" });
  _tl.fromTo("#four", { x: "-400%" }, { x: "-300%" });
  _tl.fromTo("#five", { x: "500%" }, { x: "-400%" });
  _tl.fromTo("#six", { x: "-600%" }, { x: "-500%" });

  ScrollTrigger.create({
    animation: _tl,
    trigger: ".main",
    scrub: true,
    start: "top top",
    end: () => container.clientWidth * 0.7,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
  });
};
