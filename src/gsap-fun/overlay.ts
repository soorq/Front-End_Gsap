import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
const _screenHeight = window.innerHeight;

export const gsapOverlay = ({ bar, parent }: any): void => {
  gsap.set(bar, {
    yPercent: -100,
    xPercent: -50,
  });

  const overlayTween = gsap
    .timeline({
      paused: true,
      onComplete: () => {
        overlayTween.pause();
        gsap.set(proxy, { y: -_screenHeight });
        d[0].update();
      },
      onReverseComplete: () => {
        overlayTween.pause();
        gsap.set(proxy, { y: 0 });
        d[0].update();
      },
    })
    .to(parent, {
      yPercent: -100,
      ease: "none",
    })
    .to(bar, { yPercent: 0, ease: "none" }, "<");

  const proxy = document.createElement("div");

  gsap.set(proxy, { y: 0 });
  const d = Draggable.create(proxy, {
    type: "y",
    trigger: bar,
    onDrag() {
      overlayTween.progress(-(this.y / _screenHeight));
    },
    onDragEnd() {
      if (this.deltaY > 0) {
        overlayTween.reverse();
      } else {
        overlayTween.play();
      }
    },
  });
};
