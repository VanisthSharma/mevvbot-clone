import css from '../HERO/hero.module.css';
import CheckB from '../HERO/checkbox';
import Cont from '../Cont.jsx'
export default function Footer(){
    return(
        <>
                    <section className="bg-[#171821] text-white z-[-6] h-[840px] overflow-hidden" >
            <div className=" container mx-auto flex flex-col items-center relative pt-[9rem] px-4 text-center">
                <h1 className={`z-1 text-4xl md:text-5xl font-bold mb-4  ${css.gradientText} ${css.textShort} `}>
                    START TRADING
                </h1>
                <h1 className={`tracking-wide text-4xl md:text-5xl font-bold mb-4 z-2 font-["Chillax",sans-serif] text-[56px] `} >IN LESS THAN 30 SECS</h1>
                <button className={`${css.connectBTN} bg-[#181921] z-1`}>
                    <img src="/cloud.svg" alt="Cloud" /> <p>Connect Wallet</p>
                </button>
                <CheckB/>
                <div className=' h-[1px] absolute w-[105%] bg-[#ffffff1a] bottom-[-25.5rem]'></div>
                <div className=' w-[2px] absolute h-[6.3rem] bg-[#ffffff33] right-1/2 bottom-[-30rem]'></div>
                <img src="/bottom.svg" className='absolute scale-200 bottom-[-60rem]' />
            </div>
            <Cont></Cont>
        </section>
        </>
    )
}