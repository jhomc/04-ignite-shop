import Image from "next/image";
import { HomeContainer } from "./components/home";
import { Product } from "./components/product";

import camiseta1 from "../assets/camisetas/camisa1.png"
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductsList {
  products: Product[]
}


async function getProducts(): Promise<ProductsList> {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return { products }
}


export default async function Home() {
  const { products } = await getProducts()

  return (
    <HomeContainer>
      {products.map(product => {
        return (
          <Product key={product.id}>
            <Image src={product.imageUrl} width={520} height={480} alt='camiseta' className="object-cover" />

            <footer
              className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-blackGradient
            translate-y-[110%] opacity-0 transition-all ease-in-out delay-200 group-hover:translate-y-[0%] group-hover:opacity-100 "
            >
              <strong className="text-lg">{product.name}</strong>
              <span className="text-xl font-bold text-green300">R$ {product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}
