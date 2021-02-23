document.addEventListener("DOMContentLoaded", () => {
  scrambleLetters();
  scrambleTitle();
});

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

const getHeight = () => {
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

const scrambleLetters = () => {
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

const scrambleTitle = () => {
  const letters = ["p", "o", "o", "p", "i", "e", "s"];
  const shuffled = shuffle(letters);
  const title = shuffled.join("");
  document.title = title;
};
