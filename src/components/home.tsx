'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
export interface HomeContainerProps {
  children: React.ReactElement | React.ReactElement[]
}

export function HomeContainer({ children }: HomeContainerProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    },
    renderMode: 'performance'
  })

  return (
    <div className='keen-slider overflow-hidden flex ml-auto w-full max-w-homeCalc min-h-[656px]' ref={sliderRef}>
      {children}
    </div>
  );
}
