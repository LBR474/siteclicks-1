gsap.from(
  [
    "#letter-s",
    "#letter-i-1",
    "#letter-t",
    "#letter-e",
    "#letter-c-1",
    "#letter-l",
    "#letter-i-2",
    "#letter-c-2",
    "#letter-k",
    "#letter-s-2",
    "#dot-1",
    "#letter-c-3",
    "#letter-o",
    "#letter-m",
    "#dot-2",
    "#letter-a",
    "#letter-u",
  ],
  {
    y: (i) => (i % 2 === 0 ? -400 : 400),
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.12,

    onComplete: () => {
      const colourTl = gsap.timeline({ delay: 2 });

      // Stage 1: Background orange, clicks lettering black
      colourTl.to(
        "#logo-FB-container-2",
        {
          backgroundColor: "#ec8c34",
          duration: 3,
          ease: "power2.inOut",
        },
        0,
      );

      colourTl.to(
        [
          "#letter-c-1",
          "#letter-l",
          "#letter-i-2",
          "#letter-c-2",
          "#letter-k",
          "#letter-s-2",
        ],
        {
          fill: "#000000",
          duration: 3,
          ease: "power2.inOut",
          stagger: 0.12,
        },
        0,
      );

      // Stage 2: Background white, remaining SC letters orange
      colourTl.to("#logo-FB-container-2", {
        backgroundColor: "#ffffff",
        duration: 3,
        ease: "power2.inOut",
      });

      colourTl.to(
        [
          "#letter-s",
          "#letter-i-1",
          "#letter-t",
          "#letter-e",
          "#dot-1",
          "#letter-c-3",
          "#letter-o",
          "#letter-m",
          "#dot-2",
          "#letter-a",
          "#letter-u",
        ],
        {
          fill: "#ec8c34",
          duration: 3,
          ease: "power2.inOut",
          stagger: 0.12,
        },
        "<",
      );
      // Stage 3: Return everything to the original colours
      colourTl.to("#logo-FB-container-2", {
        backgroundColor: "#000000",
        duration: 3,
        ease: "power2.inOut",
      });

      colourTl.to(
        [
          "#letter-c-1",
          "#letter-l",
          "#letter-i-2",
          "#letter-c-2",
          "#letter-k",
          "#letter-s-2",
        ],
        {
          fill: "#ec8c34",
          duration: 3,
          ease: "power2.inOut",
          stagger: 0.12,
        },
        "<",
      );

      colourTl.to(
        [
          "#letter-s",
          "#letter-i-1",
          "#letter-t",
          "#letter-e",
          "#dot-1",
          "#letter-c-3",
          "#letter-o",
          "#letter-m",
          "#dot-2",
          "#letter-a",
          "#letter-u",
        ],
        {
          fill: "#ffffff",
          duration: 3,
          ease: "power2.inOut",
          stagger: 0.12,
        },
        "<",
      );
    },
  },
);

