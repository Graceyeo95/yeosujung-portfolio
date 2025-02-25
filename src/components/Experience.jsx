import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../data';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/animation';

const ExperienceCard = ({ date, icon, company_name, title, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#181818', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      date={date}
      iconStyle={{ background: '#1d1836', color: '#fff' }}
      icon={
        <div className='w-full h-full rounded-full overflow-hidden'>
          <img src={icon} alt={company_name} className='w-full h-full' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] lg:text-[24px] font-bold'>
          {title}
        </h3>
        <p className='text-light-grey text-[16px] font-semibold'>
          {company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] lg:text-[16px] font-semibold'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className='mt-12 lg:mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
