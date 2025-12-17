import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';
  const portfolios = [
    {
      id: 1,
      name: 'Project & Product',
      image: 'images/kub.jpeg',
      link: 'https://anom.com',
    },
    {
      id: 2,
      name: 'Project & Product',
      image: 'images/5.jpg',
      link: 'https://anom.com',
    },
    {
      id: 12,
      name: 'Project & Product',
      image: 'images/ayam.jpg',
      link: 'https://anom.com',
    },
    {
      id: 13,
      name: 'Project & Product',
      image: 'images/card.jpg',
      link: 'https://anom.com',
    },
    {
      id: 15,
      name: 'Project & Product',
      image: 'images/petelur.png',
      link: 'https://anom.com',
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
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
