export const createWaLink = (message: string) => {
  const phone = '6283891515097'; // nomor WA kamu
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${phone}?text=${encodedMessage}`;
};