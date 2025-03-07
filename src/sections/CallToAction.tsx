"use client"

import ArrowIcon from "@/assets/arrow-right.svg"
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) => console.log(latestValue))

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip" ref={sectionRef}>
      <div className="container">
          <div className='max-w-[520px] mx-auto relative'>
            <h1 className="section-title">Sign up for free today</h1>
            <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts.</p>
            <motion.img 
              src={starImage.src} 
              alt="Star Image" 
              width={360} 
              className="absolute -top-32 -left-[360px] max-md:hidden"
              style={{
              translateY: translateY,
            }} 
            />
            <motion.img 
              src={springImage.src} 
              alt="Spring Image" 
              width={360} 
              className="absolute -top-1 -right-[340px] max-md:hidden"
              style={{
              translateY: translateY,
            }} 
            />
          </div>
          
          <div className="flex gap-2 mt-10 justify-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                {/* <ArrowIcon className="h-5 w-5" /> */}
                <Image src={ArrowIcon} alt="Arrow Icon" height={20} width={20} />
              </button>
          </div>

      </div>
    </section>
  )
};
