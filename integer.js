export function getInteger(max) {
  seed = (seed * 48271) % 2147483647;
  return seed % max;
}

let seed = null;

seed = Number(window.localStorage.getItem('randomSeed'));

if (seed === 0) {
  seed = Math.floor(Math.random() * 2147483647);
  window.localStorage.setItem('randomSeed', seed);
}
