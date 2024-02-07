import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex gap-2 items-center bg-primary text-white px-4 py-2 rounded-full">
            Order now
            <FiArrowRightCircle />
          </button>
          <button className="flex gap-2 items-center py-2 text-gray-700 font-semibold">
            Learn more
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
      </div>
    </section>
  )
}