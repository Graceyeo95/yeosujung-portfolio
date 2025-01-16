import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/animation';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_name: form.name,
          to_name: 'Crystal',
          from_email: form.email,
          to_email: 'sujungyeo@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'linear', 0.2, 0.8)}
        className='w-full mx-auto bg-dark-grey rounded-2xl p-4 lg:p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 lg:mt-12 flex flex-col gap-6 lg:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 lg:mb-4'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-transparent border-white border-[1px] py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 lg:mb-4'>
              Your Email
            </span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-transparent border-white border-[1px] py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 lg:mb-4'>
              Your Message
            </span>
            <textarea
              rows='7'
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What is your message?'
              className='bg-transparent border-white border-[1px] py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-blue py-3 px-12 text-white outline-none w-fit rounded-xl font-bold'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
