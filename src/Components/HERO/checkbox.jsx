import { useState } from "react"

export default function CheckB(){
    
  const [checked, setChecked] = useState(false);
    return(
        <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-4 text-[#b5b7da] z-1">
        <label className="relative inline-flex items-center cursor-pointer mr-3">
        <input 
          type="checkbox" 
          className="peer hidden"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className={`w-[1rem] h-[1rem] rounded flex items-center justify-center ${checked ? 'bg-[#6a60e8]' : 'bg-gray-500'}`}>
          {checked && (
            <svg 
            xmlns="/check.svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-3 h-3 text-white"
          >
            <path d="M20.285 6.32a1 1 0 00-1.57-1.24L9.39 15.092 5.285 11.32a1 1 0 10-1.57 1.24l5 5.5a1 1 0 001.57 0l10-11z"/>
          </svg>
          )}
        </div>
      </label>
          By connecting, I agree to the <a href="#" className="decoration-none text-[#8e9dff]">Terms</a> & <a href="#" className="decoration-none text-[#8e9dff]">Privacy</a>
        </p>
    );
}