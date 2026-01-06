import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandCampaignmonitor,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

export const MediaBar = () => {
  const media = [
    { icon: <IconBrandGithub />, link: 'https://github.com/AnomSapari' },
    {
      icon: <IconBrandLinkedin />,
      link: 'https://www.linkedin.com/in/Sapario Ma/',
    },
    {
      icon: <IconBrandInstagram />,
      link: 'https://www.instagram.com/AnomSapari__/',
    },
    { icon: <IconBrandWhatsapp />, link: 'https://wa.me/+6283891515097' },
    {
      icon: <IconBrandCampaignmonitor />,
      link: 'mailto:saparianom80@gmail.com',
    },
  ];
  const { container } = MediaBarMotion;
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="text-black hover:text-white"
          aria-label={item.link}
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
