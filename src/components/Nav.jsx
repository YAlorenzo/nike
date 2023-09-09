import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants"; 

const Nav = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);
    return (
        <>
      <header className="padding-x py-8 z-30 absolute w-full max-lg:bg-white">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                  <img src={headerLogo} alt="logo" width={130} height={29} />   
              </a>
              <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                  {navLinks.map((item) => (
                      <li key={item.label}>
                          <a href={item.href} className="font-montserrat errat leading-normal text-lg
                           text-slate-gray hover:text-coral-red transition-colors">
                              {item.label}
                          </a>
                      </li>
                  ))}
              </ul>
              <div className="hidden max-lg:block">
                  <img src={hamburger} alt="hamburger"
                      width={25}
                      height={25}
                      onClick={() => setMobileMenuState((prev) => !prev)} />
              </div>
          </nav>   
          
      </header>
      <div className={`w-full  bg-coral-red
          absolute z-20 top-0 left-0 py-3
          text-center lg:hidden ${mobileMenuState ? 'active-menu' : 'hidden-menu'}`}>
            <ul className="gap-20">
                  {navLinks.map((item) => (
                      <li key={item.label} className="mb-2 last:mb-0">
                          <a href={item.href} className="font-montserrat errat leading-normal text-lg
                           text-white">
                              {item.label}
                          </a>
                      </li>
                  ))}
              </ul>
        </div>  
      </>
  )
}

export default Nav