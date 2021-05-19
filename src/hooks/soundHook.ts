export const playSound = async (path: string) => {
  await new Audio(path).play();
};
