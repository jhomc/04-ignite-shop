interface ProductContainerProps {
  children: React.ReactElement | React.ReactElement[]
}

export function ProductContainer({ children }: ProductContainerProps) {
  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] my-0 mx-auto ">
      {children}
    </main>
  )
}