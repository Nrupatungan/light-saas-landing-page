"use client"

import CheckIcon from '@/assets/check.svg'
import {twMerge} from 'tailwind-merge'
import { motion } from 'framer-motion';
import Image from 'next/image';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">Free forever, Upgrade for unlimited tasks, better security, and exclusive features.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 items-center lg:items-end lg:justify-center mt-10'>
          {pricingTiers.map((pricing, idx) => (
            <div key={idx} className={twMerge('card', pricing.inverse && 'border-black bg-black text-white')}>
              <div className='flex justify-between'>
                <h3 className={twMerge('text-lg font-bold text-black/50', pricing.inverse && 'text-white/60')}>{pricing.title}</h3>
                {pricing.popular && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    <motion.span 
                    className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'
                    animate={{
                      backgroundPositionX: '-100%'
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>${pricing.monthlyPrice}</span>
                <span className={twMerge('tracking-tight font-bold text-black/50', pricing.inverse && 'text-white/60')}>/month</span>
              </div>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', pricing.inverse && 'bg-white text-black')}>{pricing.buttonText}</button>
              <ul className='flex flex-col gap-5 mt-8'>
                {pricing.features.map((feature, idx) => (
                  <li key={idx} className='text-sm flex items-center gap-4'>
                    {/* <CheckIcon className="h-6 w-6" /> */}
                    <Image src={CheckIcon} alt='Check Icon' height={24} width={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
