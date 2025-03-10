import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className="py-10 lg:py-14 bg-black text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB29CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:bg-red-500 before:absolute">
          <Image src={Logo} alt="Saas Logo" height={40} className="realtive z-10" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          {/* <SocialX className='' /> */}
          <Image src={SocialX} alt="Social X Icon" />
          {/* <SocialInsta className='' /> */}
          <Image src={SocialInsta} alt="Social Insta Icon" />
          {/* <SocialLinkedIn className='' /> */}
          <Image src={SocialLinkedIn} alt="Social LinkedIn Icon" />
          {/* <SocialPin className='' /> */}
          <Image src={SocialPin} alt="Social Pin Icon" />
          {/* <SocialYoutube className='' /> */}
          <Image src={SocialYoutube} alt="Social Youtube Icon" />
        </div>
        <p className="mt-6">&copy; 2025 Your Comapany, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
};
