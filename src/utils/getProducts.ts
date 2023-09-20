import { stripe } from "@/lib/stripe";
import { cache } from "react";
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

export const revalidate = 60

export const getProducts = cache(async () => {
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
})
