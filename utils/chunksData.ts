export const chunksData = <T>(array: T[], size: number): T[][] => {
  if (!array.length) {
    return [];
  }
  const first = array.slice(0, size);
  const next = array.slice(size);
  return [first, ...chunksData(next, size)];
};
