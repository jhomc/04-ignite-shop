import Image from "next/image";
import { HomeContainer } from "./components/home";
import { Product } from "./components/product";

import camiseta1 from "../assets/camisetas/camisa1.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' className="object-cover" />

        <footer
          className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
          translate-y-[110%] opacity-0 transition-all ease-in-out delay-200 group-hover:translate-y-[0%] group-hover:opacity-100 "
        >
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' className="object-cover" />

        <footer
          className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
          translate-y-[110%] opacity-0 transition-all ease-in-out delay-20 group-hover:translate-y-[0%] group-hover:opacity-100 "
        >
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' className="object-cover" />

        <footer
          className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
          translate-y-[110%] opacity-0 transition-all ease-in-out delay-20 group-hover:translate-y-[0%] group-hover:opacity-100 "
        >
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' className="object-cover" />

        <footer
          className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
          translate-y-[110%] opacity-0 transition-all ease-in-out delay-200 group-hover:translate-y-[0%] group-hover:opacity-100 "
        >
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green300">R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
