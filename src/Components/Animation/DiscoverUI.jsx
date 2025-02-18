import React, { useState, useEffect, useRef } from 'react';

export default function DiscoverSection() {
  const UiComps = [
    { id: '[ 01. ]', heading: 'Discover', description: 'Discover new tokens and filter by your preferences.' },
    { id: '[ 02. ]', heading: 'Monitor', description: 'Real-time security updates & easily monitor your portfolio.' },
    { id: '[ 03. ]', heading: 'Quick Buy and Sell', description: 'Trade faster with MevvBOT with a speed advantage for every transaction.' }
  ];

  const images = ['/portfolio.png', '/Stock.png', '/BuySell.png'];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentImage(images[index]);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#171821] text-white">
      <div className="flex">
        <div className="w-1/3 space-y-32 py-20 pl-16">
          {UiComps.map(({ id, heading, description }, index) => (
            <div
            key={id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex flex-col justify-center border-b border-[#333] pb-20"
            >
              {id==="[ 01. ]" && <img src='/moons.svg' className='h-4 self-start' />}
              <p className="text-sm text-[#8d93b7]">{id}</p>
              <h1 className="text-5xl font-bold text-[#fffffff2]">{heading}</h1>
              <p className="text-lg text-[#b5b7da] w-[250px]">{description}</p>
            </div>
          ))}
        </div>

        <div className="w-2/3 relative">
          <div className="sticky top-24 w-[full] h-max mx-auto">
            <img
              src={currentImage}
              alt="Portfolio"
              className="w-[75%] h-full object-cover rounded-lg border border-[#222]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}