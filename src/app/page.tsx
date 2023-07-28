import Image from "next/image";
import { HomeContainer } from "./components/home";
import { Product } from "./components/product";

import camiseta1 from "../assets/camisetas/camisa1.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
