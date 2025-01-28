import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../data';
import { logo, menu, close } from '../assets';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/60`}
    >
      <div className='w-full flex justify-between items-center max-w-[85vw] mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 z-50'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='size-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Crystal
          </p>
        </Link>

        <ul className='list-none hidden sm:flex gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-blue' : 'text-white'
              } hover:text-white cursor-pointer text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='size-[28px] object-contain cursor-pointer z-50'
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: toggle ? 0 : '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`flex p-6 h-screen w-full z-40 bg-black absolute top-0 right-0`}
          >
            <ul className='list-none flex sm:hidden pt-[200px] items-center w-full flex-col gap-6'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className='text-white font-poppins font-medium cursor-pointer text-[30px]'
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
