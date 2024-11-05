import React from 'react';
import { HERO } from '../constants';
import profile from '../assets/pic.jpeg';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <section className="flex flex-wrap items-center min-h-[100vh]">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[4rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description}
        </p>

        {/* Only visible on screens 768px and above */}
        <div className="hidden md:block">
          <a
            href={HERO.cvLink}
            download
            className="inline-block px-5 py-3 mt-4 ml-2 text-white font-bold bg-green-400 hover:bg-green-500 rounded-lg"
          >
            Download CV
          </a>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={profile}
            width={450}
            height={450}
            alt="Rosen Georgiev"
            className="rounded-3xl"
          />
        </div>

        {/* Download button centered for screens below 768px */}
        <div className="flex justify-center mt-20 md:hidden">
          <a
            href={HERO.cvLink}
            download
            className="inline-block px-5 py-3 text-white font-bold bg-green-400 hover:bg-green-500 rounded-lg"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Main;
