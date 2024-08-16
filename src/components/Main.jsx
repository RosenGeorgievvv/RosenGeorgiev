import React from 'react';
import { HERO } from '../constants';
import profile from '../assets/pic.jpeg';

const Main = () => {
  return (
    <section className="flex flex-wrap items-center min-h-[100vh]">
      <div className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[4rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description}                  
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img
            src={profile}
            width={450}
            height={450}
            alt="Rosen Georgiev"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
