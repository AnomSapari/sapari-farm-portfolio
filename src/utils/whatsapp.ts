export const WHATSAPP_NUMBER = '6283891515097'; // ganti nomor kamu

export const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
