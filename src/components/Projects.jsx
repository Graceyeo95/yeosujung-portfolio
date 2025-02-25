import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/animation';
import { projects } from '../data';
import { SectionWrapper } from '../hoc';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <motion.div initial='hidden' animate='show' variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial='hidden'
          animate='show'
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-light-grey text-[17px] max-w-3xl leading-[30x]'
        >
          지금까지 해왔던 프로젝트와 그 과정에서 얻은 경험을 소개하겠습니다.
          저는 주로 회사에서 제공한 스타터 키트를 사용하여 프로젝트를 시작했고,
          또한 개인적으로 만든 프로젝트들을 통해 요구사항에 맞게 코드를 확장해
          나갔습니다.
        </motion.p>
      </div>

      <div className='mt-12 lg:mt-20 grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12 gap-8'>
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className='col-span-6 md:col-span-4 xl:col-span-4'
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
