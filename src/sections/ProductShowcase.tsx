"use client"

import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) => console.log(latestValue))

  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-clip' ref={sectionRef}>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h1 className='section-title mt-5'>A more effective way to track progress</h1>
          <p className='section-description mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
        <div className="relative">
          <Image src={productImage} alt='Product Image' className='mt-10' />
          <motion.img 
            src={pyramidImage.src} 
            alt='Pyramid Image' 
            height={262} 
            width={262} 
            className='absolute -right-36 -top-32 max-md:hidden'
            style={{
              translateY: translateY,
            }}
          />
          <motion.img 
            src={tubeImage.src} 
            alt='Tube Image' 
            height={248} 
            width={248}
            className='absolute bottom-16 -left-[145px] max-md:hidden'
            style={{
              translateY: translateY,
            }} 
          />
        </div>
      </div>
    </section>
  );
};
