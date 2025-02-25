import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../data/index';
import { textVariant, fadeIn } from '../utils/animation';
import { SectionWrapper } from '../hoc';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <>
      <motion.div initial='hidden' animate='show' variants={textVariant()}>
        <p className={styles.sectionSubText}>Strength I have</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p
        initial='hidden'
        animate='show'
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-light-grey text-[17px] max-w-3xl leading-[30px]'
      >
        다향한 기술들을 써본 경험이 있습니다.
      </motion.p>

      <div className='mt-12 lg:mt-20 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-8'>
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className='col-span-6 sm:col-span-3 md:col-span-4 xl:col-span-3'
          >
            <SkillCard index={index} {...technology} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
