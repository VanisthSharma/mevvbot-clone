import { FaAngleDown, FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ show, setShow }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { name: 'ETH', icon: '/eth.svg' },
    { name: 'SOL', icon: '/SOL.svg' },
    { name: 'TRON', icon: '/tron.svg' },
    { name: 'BASE', icon: '/base.svg' },
    { name: 'BLAST', icon: '/blast.svg' }
  ];

  return (
    <>
      <div className='w-full flex px-4 md:px-6 bg-[#181921] text-white h-[56px] items-center justify-between border-b border-[#ffffff1a]'>
        <div className='flex items-center gap-4'>
          <img src="/Logo.png" alt="Logo" className='h-[24px] w-[100px]' />
        </div>

        <div className='hidden md:flex items-center gap-6'>
          <a href="#" className='text-[#b5b7da] tracking-wider text-[12px] font-extrabold hover:text-white transition'>
            DOCUMENTATION
          </a>
          <div className='flex items-center gap-1 cursor-pointer' onClick={() => setShow(!show)}>
            <img src="/SOL.svg" alt="SOL" className="h-5" />
            <p className='text-[#b5b7da] text-[13px] font-bold'>SOL</p>
            <FaAngleDown className="text-[#b5b7da]" />
          </div>
          <div className="flex gap-4">
            <a href="#">
              <FaXTwitter className="text-[#b5b7da] text-[20px] hover:text-white transition-colors" />
            </a>
            <a href="#">
              <RiTelegram2Fill className="text-[#b5b7da] text-[20px] hover:text-white transition-colors" />
            </a>
          </div>

          <div className='flex items-center gap-1'>
            <img src="/global.svg" alt="Global" className="h-4" />
            <span className='text-gray-400 font-bold'>EN</span>
          </div>
        </div>
        <div className='md:hidden cursor-pointer text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ?<p>Close</p> : <GiHamburgerMenu /> }
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-[#111217] bg-opacity-95 z-30 flex flex-col items-center pt-20 space-y-6 md:hidden">
          <a href="#" className='text-[#b5b7da] tracking-wider text-lg font-bold hover:text-white transition'>
            DOCUMENTATION
          </a>
          <div onClick={() => setShow(!show)} className='flex items-center gap-2 cursor-pointer'>
            <img src="/SOL.svg" alt="SOL" className="h-5" />
            <p className='text-[#b5b7da] text-lg font-bold'>SOL</p>
            <FaAngleDown className="text-[#b5b7da]" />
          </div>
          <div className="flex gap-6">
            <a href="#">
              <FaXTwitter className="text-[#b5b7da] text-2xl hover:text-white transition-colors" />
            </a>
            <a href="#">
              <RiTelegram2Fill className="text-[#b5b7da] text-2xl hover:text-white transition-colors" />
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <img src="/global.svg" alt="Global" className="h-4" />
            <span className='text-gray-400 font-bold'>EN</span>
          </div>
        </div>
      )}
      {show && (
        <div className="z-20 flex flex-col rounded-lg border border-[#ffffff1a] bg-[#171821] absolute right-4 top-[4rem] w-[240px] shadow-lg">
          {items.map(({ name, icon }) => (
            <a key={name} href="./" className="text-white">
              <div className='flex items-center gap-4 px-4 py-2 hover:bg-[#242424] transition-colors'>
                <img src={icon} alt={name} className="h-[24px] w-[24px]" />
                <p className="font-bold text-[#dbd7f3]">{name}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
