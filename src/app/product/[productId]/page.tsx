import { ProductContainer } from "@/components/productContainer"
import { ProductDetails } from "@/components/productDetails"
import { getProductById, getProducts } from "@/utils/getProducts"
import Image from "next/image"

interface ProductProps {
  params: {
    productId: string
  }
}

export async function generateStaticParams({ params: { productId } }: ProductProps) {
  const { products } = await getProducts()
  return products.map(product => productId == product.id)
}


export default async function Product({ params }: ProductProps) {
  const product = await getProductById(params.productId)
  return (
    <ProductContainer>
      <div className="w-100% max-w-[576px] bg bg-gradient-to-b from-greenGradient to-blueGradient rounded-lg p-1 flex items-center justify-center h-productCalc">
        <Image className="object-cover" src={product.imageUrl} width={680} height={480} alt="camiseta" />
      </div>
      <ProductDetails product={product} />
    </ProductContainer>
  )
}