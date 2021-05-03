export const toSeconds = (s = 0, m = 0, h = 0) =>
  [s, m, h].map(Number).reduce((a, c, i) => a + [1, 60, 3600][i] * c, 0);

export const formatTime = seconds => {
  let h = seconds / 3600;
  h = h < 1 ? 0 : Math.floor(h);
  seconds = seconds % 3600;
  let m = seconds / 60;
  m = m < 1 ? 0 : Math.floor(m);
  return [h, m, seconds % 60].map(n => (n > 9 ? n : "0" + n));
};
