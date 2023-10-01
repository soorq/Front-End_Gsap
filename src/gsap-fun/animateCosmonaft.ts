import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IAnimateCosmo {
  cosm: HTMLDivElement;
  mainFrom: HTMLDivElement;
  triggerContet: HTMLDivElement;
}

export const animateCosm = (props: IAnimateCosmo): void => {
  const { cosm, mainFrom, triggerContet } = props;
  const _tl = gsap.timeline();

  _tl.fromTo(
    cosm,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    },
    2
  );

  console.log(triggerContet);
  gsap.to(mainFrom, {
    scrollTrigger: {
      trigger: ".trigger",
      markers: true,
      start: "center top",
      scrub: true,
    },
    y: 400,
  });
};
