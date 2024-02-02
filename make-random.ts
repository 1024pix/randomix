export function makeRandom(seed: number) {
  seed %= 2147483647;
  if (seed <= 0) seed += 2147483646;
  const next = () => {
    seed = (seed * 48271) % 2147483647;
    return seed;
  };
  next();
  return next;
}
