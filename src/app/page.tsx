import Image from "next/image";
import { HomeContainer } from "./components/home";
import { Product } from "./components/product";

import camiseta1 from "../assets/camisetas/camisa1.png"
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { cache } from "react";
import { getProducts } from "@/utils/getProducts";
import Link from "next/link";


export default async function Home() {
  const { products } = await getProducts()

  return (
    <HomeContainer>
      {products.map(product => {
        return (
          <Link key={product.id} href={`/product/${encodeURIComponent(product.id)}`}>
            <Product >
              <Image src={product.imageUrl} width={520} height={480} alt='camiseta' className="object-cover" />

              <footer
                className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
              translate-y-[110%] opacity-0 transition-all ease-in-out delay-200 group-hover:translate-y-[0%] group-hover:opacity-100 "
              >
                <strong className="text-lg">{product.name}</strong>
                <span className="text-xl font-bold text-green300">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </footer>
            </Product>
          </Link>
        )
      })}
    </HomeContainer>
  )
}
