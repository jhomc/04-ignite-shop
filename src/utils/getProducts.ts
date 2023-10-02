import { stripe } from "@/lib/stripe";
import { cache } from "react";
import Stripe from "stripe";

export interface Product {
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
  const response = await stripe!.products.list({
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

export const getProductById = cache(async (id: string) => {
  const product = await stripe!.products.retrieve(id, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price.unit_amount! / 100,
    description: product.description,
    defaultPriceId: price.id
  }
})

export const getProductBySessionId = async (sessionId: string) => {
  const session = await stripe!.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product


  return {
    customerName,
    product: {
      name: product.name,
      imageUrl: product.images[0]
    }
  }
}

