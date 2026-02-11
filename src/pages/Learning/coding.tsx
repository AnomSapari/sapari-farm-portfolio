import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandSvelte,
  IconBrandTailwind,
} from "@tabler/icons-react";

import { SectionMotion } from "@/common/motion/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";

export default function LearningCoding() {
  const { section } = SectionMotion;

  const skills = [
    { label: "React Js", icon: <IconBrandReact /> },
    { label: "Next Js", icon: <IconBrandNextjs /> },
    { label: "Vue Js", icon: <IconBrandVue /> },
    { label: "Nuxt Js", icon: <IconBrandNuxt /> },
    { label: "Svelte Js", icon: <IconBrandSvelte /> },
    { label: "Tailwind CSS", icon: <IconBrandTailwind /> },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-8"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Learning · Coding"
        description="Skills & technologies I use"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.label}
            icon={skill.icon}
            label={skill.label}
          />
        ))}
      </div>
    </motion.section>
  );
}
