import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

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

export default SkillCard;
