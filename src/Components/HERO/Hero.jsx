import CheckB from './checkbox';
import Heading from './Heading';
import Img from './images';

export default function Hero({setShow}){
  return(
    <>
      <section className="bg-[#171821] text-white z-[-6]" onClick={()=>setShow(false)} >
        <div className=" container mx-auto flex flex-col items-center relative pt-[9rem] px-4 text-center">
          <Heading/>
          <CheckB/>
          <Img/>
        </div>
      </section>
    </>
  );
};
