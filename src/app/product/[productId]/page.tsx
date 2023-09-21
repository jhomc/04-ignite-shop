interface ProductProps {
  params: {
    productId: string
  }
}

export default function Product({ params }: ProductProps) {
  return <p>{params.productId}</p>
}