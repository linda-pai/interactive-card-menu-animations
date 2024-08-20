const getOffset = (el) => {
  //target translateXY to the center
  const rect = el.getBoundingClientRect();
  const targetX = rect.x + rect.width / 2;
  const targetY = rect.y + rect.height / 2;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const translateX = windowWidth / 2 - targetX;
  const translateY = windowHeight / 2 - targetY;

  return { translateX, translateY };
};

export default getOffset;
