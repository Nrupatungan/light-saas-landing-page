import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex justify-center items-center bg-black text-white text-sm py-3 gap-3">
        <p className="hidden md:block text-white/60">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
           */}
           <Image src={ArrowRight} alt="Arrow right" height={16} width={16} className="inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
            <Image src={MenuIcon} alt="Menu icon" height={20} width={20} className="md:hidden" />
            <nav className="hidden md:flex gap-6 items-center text-black/60">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};