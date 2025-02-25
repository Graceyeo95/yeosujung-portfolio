import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../data/index';
import { textVariant, fadeIn } from '../utils/animation';
import { SectionWrapper } from '../hoc';

const SkillCard = ({ name, icon, points, index }) => {
  return (
    <Tilt className='w-full'>
      <motion.div
        initial='hidden'
        animate='show'
        variants={fadeIn('right', 'linear', index * 0.45, 0.75)}
        className='w-full p-[1px] rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-navy p-4 lg:p-8 min-h-[230px] lg:min-h-[280px] justify-center flex flex-col'
        >
          <div className='flex flex-col lg:flex-row gap-x-2 h-fit items-center justify-center'>
            <img
              src={icon}
              alt={name}
              className='size-8 md:size-10 lg:size-14 object-contain'
            />
            <h3 className='text-white text-[14px] md:text-[16px] lg:text-[20px] font-bold text-center'>
              {name}
            </h3>
          </div>

          <div className='w-full h-auto'>
            <ul>
              {points?.map((point, index) => (
                <li
                  className='text-white mt-5 list-disc ml-5 space-y-2'
                  key={`tech-point-${index}`}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skill = () => {
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

      <div className='mt-20 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-8'>
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

export default SectionWrapper(Skill, 'skill');
