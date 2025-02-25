import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BeamLight } from './BeamLight';
import { socialLinks } from '../data';
import { staggerContainer, revealText } from '../utils/animation';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <BeamLight />
      <div
        className={`${styles.paddingX} absolute inset-0 top-1/2 -translate-y-1/2 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-96 h-56 blue-gradient rounded-full' />
        </div>

        <div>
          <motion.div
            initial='hidden'
            whileInView='show'
            variants={staggerContainer(0.4, 0.2)}
            className='overflow-y-hidden'
          >
            <motion.h1
              variants={revealText}
              className={`${styles.heroHeadText} text-white`}
            >
              안녕하세요, <span className=''>웹 개발자</span>
            </motion.h1>
            <motion.h1
              variants={revealText}
              className={`${styles.heroHeadText} text-blue`}
            >
              여수정입니다
            </motion.h1>
          </motion.div>
          <p className={`${styles.heroSubText} mt-2 lg:max-w-[80%] text-white`}>
            사용자의 경험을 최우선으로 생각하며, 완성도 높은 UI와 코드를 위해
            끊임없이 노력하는 프론트엔드 개발자입니다. 새로운 도전을 통해 한
            단계씩 성장해 나가겠습니다. 감사합니다.
          </p>
          <div className='flex gap-x-4 mt-4'>
            {socialLinks.map((link) => (
              <a
                href={link.value}
                key={`social-${link.title}`}
                target='_blank'
                className='border-2 text-[13px] text-white lg:text-[16px] flex items-center gap-x-2 border-white rounded-full py-2 px-3 lg:px-6'
              >
                {link.title}
                <img
                  src={link.icon}
                  alt={link.title}
                  className='size-6 2xl:size-8'
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute bottom-[5%] w-full flex justify-center items-center'>
        <a href='#skills'>
          <div className='w-[30px] h-[50px] md:w-[35px] md:h-[64px] rounded-3xl border-2 md:border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='size-2 lg:size-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
