import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/animation';
import { projects } from '../data';
import { SectionWrapper } from '../hoc';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  points,
  website_link,
  contribution_rate,
  github_link,
  isSideProject,
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={fadeIn('up', 'linear', index * 0.5, 1.3)}
    >
      <div className='relative bg-dark-grey px-5 text-white pb-5 pt-12 rounded-2xl sm:w-[360px] w-full overflow-hidden'>
        <span className='absolute top-0 left-0 bg-light-grey w-full text-center text-black font-semibold uppercase py-2'>
          {isSideProject ? 'Side Project' : 'Company Project'}
        </span>
        <div className='relative w-full aspect-video rounded-2xl'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-contain'
          />
        </div>

        <div className='mt-3 space-y-2'>
          <h3 className='font-bold text-[24px] uppercase'>{name}</h3>
          <p className='text-light-grey text-[14px]'>{description}</p>
          <div className='pt-3 gap-y-3 text-[14px] lg:text-[16px] font-bold flex flex-col'>
            <a
              href={website_link}
              target='_blank'
              className='underline underline-offset-2 flex gap-x-2 items-center'
            >
              <FaLink className='size-6' />
              웹사이트 바로가기
            </a>
            {github_link && (
              <a
                href={github_link}
                target='_blank'
                className='underline underline-offset-2 flex gap-x-2 items-center'
              >
                <FaGithub className='size-6' />
                Github 바로가기
              </a>
            )}
            <p>기여도: {contribution_rate}%</p>
            <div className='mt-4'>
              <p>담당한 부분:</p>
              <ul className='mt-2 list-disc ml-5 space-y-2'>
                {points.map((point, index) => (
                  <li
                    key={`project-point-${index}`}
                    className='text-[14px] lg:text-[16px] font-semibold'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='border-2 px-3 py-1 rounded-2xl text-[12px]'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
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

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, 'project');
