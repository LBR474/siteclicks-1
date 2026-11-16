document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("#Albert-Arthur-Logo-final");

  // Stop safely if this page doesn't contain the AAL logo
  if (!logo) {
    console.warn("AAL logo not found. Animation skipped.");
    return;
  }

  const elements = logo.querySelectorAll(
    '[id^="symbol-"], ' + '[id^="letter-"], ' + "#corner-lawyers",
  );

  // Wrap each element in a new SVG group
  const pieces = [];

  elements.forEach((element) => {
    const wrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");

    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    pieces.push({
      element,
      wrapper,
    });
  });

  // Find the origin letter
  const origin = pieces.find((piece) => piece.element.id === "letter-A-albert");

  if (!origin) {
    console.warn("AAL origin letter not found.");
    return;
  }

  const originBox = origin.wrapper.getBBox();

  const originX = originBox.x + originBox.width / 2;
  const originY = originBox.y + originBox.height / 2;

  // Create the animation
  const tl = gsap.timeline();

  pieces.forEach(({ wrapper }) => {
    const box = wrapper.getBBox();

    const pieceX = box.x + box.width / 2;
    const pieceY = box.y + box.height / 2;

    const xOffset = originX - pieceX;
    const yOffset = originY - pieceY;

    tl.fromTo(
      wrapper,
      {
        x: xOffset,
        y: yOffset,
      },
      {
        x: 0,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      0,
    );
  });
});
