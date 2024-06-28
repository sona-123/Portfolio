'use client';
import React, { useEffect,useCallback } from 'react';

import Navbar from '@/Components/Navbar';
import Home from '@/Components/Home';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import CodingProfile from '@/Components/CodingProfile';
import Particle from '@/Components/Particle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});


export default function Page() {
  useEffect(() => {
    Aos.init();
  }, []);
  setTimeout(()=>{
    Aos.refresh()
  },500)

  return (
    <>
    <Particle/>
    <div className={roboto.className}>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Projects />
        <CodingProfile />
        <Contact />
      </div>
    </div>
    </>
  );
}