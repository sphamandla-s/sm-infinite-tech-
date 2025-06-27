'use client';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';

export default function page() {
  return (
    <main className='bg-white/80 dark:bg-black/80'>
      <Navbar />
      <Hero />
      {/* <Coming /> */}
    </main>
  );
}

