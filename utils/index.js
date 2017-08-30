/**
 * Gets viewport height
 * @return {Number}
 */
export const vh = () => (
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
);

/**
 * Checks if an image is cached, else loads the image.
 * @param {string} src  The image source.
 */
export const isCached = (src) => {
  const image = new Image();
  image.src = src;

  return image.complete;
};

/**
 * Checks if element is in or above viewport
 * @param {string} element The element to be evaluated
 * @return {Boolean}
 */
export const inOrAboveView = (element) => {
  if ((window.scrollY + vh()) > element.offsetTop) {
    return true;
  }
  return false;
};
