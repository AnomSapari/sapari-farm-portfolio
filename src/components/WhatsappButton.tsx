import { createWaLink } from '../pages/Learning/Farming/utils/whatsapp';
import { IconBrandWhatsapp } from '@tabler/icons-react';

interface Props {
  message: string;
  label?: string;
}

export const WhatsappButton = ({ message, label = 'Chat WhatsApp' }: Props) => {
  return (
    <a
      href={createWaLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 
                 px-6 py-4 rounded-xl
                 bg-green-600 hover:bg-green-700
                 text-white font-bold text-lg
                 transition shadow-lg"
    >
      <IconBrandWhatsapp className="w-6 h-6" />
      {label}
    </a>
  );
};
