export const createWaLink = (message: string) => {
  const phone = '6283891515097';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
