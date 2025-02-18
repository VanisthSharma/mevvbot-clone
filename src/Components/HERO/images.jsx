import css from './hero.module.css';
import Sales from './sales';
export default function Img(){
    
    return(
        <>
            <div className='h-250 flex justify-center z-0 mb-0'>
                <img src="/bg-circles.svg" className=' absolute mt-[-22rem]' />
                <img src="/blur-bg.svg" className=' absolute mt-[-16rem]'/>
                {window.innerWidth>=540 && <img src="/trading_full.png" alt="Trading" className='h-130' /> }
                <div className=' h-[1px] absolute w-[100%] bg-[#ffffff1a] mt-45'></div>
                <div className=' h-[1px] absolute w-[100%] bg-[#ffffff1a] mt-100'></div>
                
                {window.innerWidth>=540 && <img src="/target.svg" alt="Target" className={`absolute ${css.bigShort} mt-38`} /> }
                <Sales/>
            </div>
            <p className={`text-6xl font-["Chillax",sans-serif] absolute top-300 font-bold tracking-wide `}>BUILT BY TRADERS</p>
            <p className={`text-6xl font-["Chillax",sans-serif] absolute top-320  font-bold tracking-wide  ${css.resp}`}>FOR TRADERS</p>
       

        </>
    )
}