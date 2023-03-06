import React, { useState } from 'react';
import { Header } from './components/Header';

import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { Popular } from './components/Popular';
import retropc from "./assets/images/image-retro-pcs.jpg";
import laptops from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import { NavbarMobile } from './components/NavbarMobile';

function App() {
  const [navVisible, setNavVisible] = useState<Boolean>(false);
  const toggleNav = (): void => {
      setNavVisible(!navVisible)
  }

  return (
    <div className="font-inter bg-offWhite max-w-screen min-h-screen">
      {navVisible && <NavbarMobile handleNavToggle={toggleNav}/>}
      <div className='mx-auto w-5/6 pt-16'>
        <Navbar handleNavToggle={toggleNav}/>

        <div className='mt-12 flex flex-col md:flex-row gap-8 justify-between w-full'>
          <div className='w-full md:w-2/3'>
            <Header />
          </div>
          <div className='w-full md:w-1/3'>
            <News />
          </div>
        </div>

        <div className='pt-20 w-full flex flex-col lg:flex-row gap-4'>
          <Popular number={"01"} image={retropc} title={"Reviving Retro PCs"} text={"What happens when old PCs are given modern upgrades?"}/>
          <Popular number={"02"} image={laptops} title={"Top 10 Laptops of 2022"} text={"Our best picks for various needs and budgets."}/>
          <Popular number={"03"} image={gaming} title={"The Growth of Gaming"} text={"How the pandemic has sparked fresh opportunities."}/>
        </div>
      </div>
    </div>
  );
}

export default App;
