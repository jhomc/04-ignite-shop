import Image from "next/image";
import Link from "next/link";
import { getProductBySessionId } from "@/utils/getProducts";
import { redirect } from "next/navigation";

export default async function Success({ searchParams }: { searchParams: { session_id: string } }) {
  if (!searchParams.session_id) {
    redirect('/')
  }

  const data = await getProductBySessionId(searchParams.session_id)
  return (
    <main className="flex flex-col items-center content-center my-0 mx-auto h-[656px]">
      <h1 className="text-2xl text-gray100">Compra efetuada!</h1>

      <div className="w-full max-w-[130px] h-[145px] mt-16 bg-gradient-to-b from-greenGradient to-blueGradient rounded-lg p-1 flex items-center content-center">
        <Image src={data.product.imageUrl} width={130} height={130} alt="camiseta" className="object-cover" />
      </div>

      <p className="text-xl mt-8 text-gray300 max-w-[560px] text-center">Uhuul <strong>{data.customerName}</strong>, sua <strong>{data.product.name}</strong> já esta a caminho da sua casa</p>

      <Link href='/' className=" mt-20 block text-lg text-green500 hover:text-green300 font-bold">
        Voltar ao catálogo
      </Link>
    </main>
  )
}