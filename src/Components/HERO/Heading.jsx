import css from './hero.module.css';

export default function Heading() {
  return (
    <>
      {/* Responsive headings like Mevvbot.com */}
      <h1 className={`z-1 font-bold mb-4 ${css.gradientText} text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm-text-2xl`}>
        SNIPE AND TRADE TOKENS
      </h1>
      <h1 className={`tracking-wide font-bold mb-4 z-2 font-["Chillax",sans-serif] sm:text-2xl md:text-6xl lg:text-7xl leading-tight ${css.bigT} ${window.innerWidth<580 && "text-xl" }`}>
        AT LIGHTNING SPEED
      </h1> 
      <div className={`z-1 text-[#b5b7da] flex items-center gap-2 mt-4 mb-8 text-sm sm:text-base md:text-lg lg:text-xl`}>
        Connect to start trading any <p className={`${css.smallGradientText}`}>SOLANA</p> coin/token now
      </div>
    </>
  );
}
