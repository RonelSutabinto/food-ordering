
import React from 'react'
import Image from 'next/image';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-o right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-lef -z-10">
          <Image src={'/sallad1.png'} alt={'salad'} width={109} height={189}/>
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'salad'}/>
        </div>
      </div>
      <div className="text-center mb-6">
        <SectionHeaders 
          subHeader={'Check out'}
          mainHeader={'Menu'}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
    
  )
}
