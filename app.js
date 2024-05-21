const boxes = Array.from(document.querySelectorAll(".box"));

const startAnim = (e) => {
  const randRed = gsap.utils.random(0, 255);
  const randGreen = gsap.utils.random(0, 255);
  const randBlue = gsap.utils.random(0, 255);

  const randomRGB = `rgb(${randRed}, ${randGreen}, ${randBlue})`;

  gsap.to(".box", {
    background: randomRGB,
    scale: 1.5,
    ease: "power1.inOut",
    duration: 0.5,
    yoyo: 1,
    repeat: 1,
    stagger: {
      grid: [20, 20],
      from: boxes.indexOf(e.target),
      each: 0.1
    },
    onStart: () => {
      console.log("Animation has started!");
      console.log("Box events has been removed!");

      boxes.forEach((box) => {
        box.removeEventListener("click", startAnim);
      });
    },
    onComplete: () => {
      console.log("Complete");
      console.log("Box events has been added back!");

      boxes.forEach((box) => {
        box.addEventListener("click", startAnim);
      });
    }
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", startAnim);
});
