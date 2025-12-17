import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Whatsapp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '+6283891515097',
      link: 'https://wa.me/+6283891515097',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'saparianom80@gmail.com',
      link: 'mailto:saparianom80@gmail.com',
    },
    {
      id: 3,
      name: 'Instagram',
      image: <IconBrandInstagram style={iconStyles} />,
      description: 'anomsapari__',
      link: 'https://www.instagram.com/anomsapari__',
    },
    {
      id: 4,
      name: 'Github',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'AnomSapari',
      link: 'https://github.com/anomsapari',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'AnomSapari',
      link: 'https://www.linkedin.com/in/sapario/',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
