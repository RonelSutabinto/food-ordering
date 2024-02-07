
import React from 'react'
import Image from 'next/image';
import MenuItem from '../menu/MenuItem';

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
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">
          Menu
        </h2>
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
