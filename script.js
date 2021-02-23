document.addEventListener("DOMContentLoaded", () => {
  scramble();
});

getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

getHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
};

const remToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

const scramble = () => {
  const documentPadding = remToPixels(5);
  const letters = document.querySelectorAll(".letter");
  const positionMap = {};
  letters.forEach((letter) => {
    let paddedWidth = getWidth() - documentPadding * 2;
    let paddedHeight = getHeight() - documentPadding * 2;
    let x = Math.random() * paddedWidth + documentPadding;
    let y = Math.random() * paddedHeight + documentPadding;
    positionMap[letter.id] = {
      x: x,
      y: y,
    };
    letter.style.left = `${x}px`;
    letter.style.top = `${y}px`;
  });
};
