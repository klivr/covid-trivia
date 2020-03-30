const shuffle = (array: any[]) => {
  array.sort(() => Math.random() - 0.5);
};

export const shuffleArray = (array: any[]) => {
  for (let i = 0; i < 100; i++) {
    shuffle(array);
  }
  return array;
};

export const selectRandomElements = (array: any[], total: number) => {
  return array;
};
