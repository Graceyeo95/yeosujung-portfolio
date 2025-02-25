import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import { fadeIn } from '../utils/animation';

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
      <div className='relative bg-dark-grey px-5 text-white pb-5 pt-12 rounded-2xl overflow-hidden'>
        <span
          className={`${
            isSideProject ? 'bg-light-grey text-black' : 'bg-blue'
          } absolute top-0 left-0 w-full text-center font-semibold uppercase py-2`}
        >
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
export default ProjectCard;
