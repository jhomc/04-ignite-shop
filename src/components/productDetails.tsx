import { Product } from "@/utils/getProducts";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string | null;
  }
}


export function ProductDetails({ product }: ProductProps) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl text-gray300">{product.name}</h1>
      <span className="mt-4 block text-2xl text-green300">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

      <p className="mt-10 leading-[1.6] text-gray300">{product.description}</p>

      <button className="mt-auto bg-green500 border-0 text-white rounded-lg p-5 cursor-pointer font-bold text-md hover:bg-green300">
        Comprar
      </button>
    </div>
  )
}