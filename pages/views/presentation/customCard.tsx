import Image from "next/image"
import { FoodI } from "model/foodInterface"
import { MockDataArtikelI } from "model/mockDataInterface"

interface CustomCardGeneralI {
  data: MockDataArtikelI | FoodI
  usedFor: "artikel" | "food"
  onClickFoodCard?: () => void
}

export default function CustomCardGeneral({ data, onClickFoodCard, usedFor = "artikel" }: CustomCardGeneralI) {
  if (usedFor === "food") {
    const { image, name, formQuality } = data as FoodI
    return (
      <div className="w-[150px] cursor-pointer rounded-[6px] hover:shadow-lg" onClick={onClickFoodCard}>
        <section className="h-[120px] w-[150px] overflow-hidden rounded-[6px]">
          <img src={image as string} alt="artikel1" className="w-full max-w-[500px] object-cover" />
        </section>
        <div className="px-[10px] py-[17px]">
          <h1 className="font-heading-4 mb-[8px]">{name}</h1>
          <p className="font-body-4">{formQuality}</p>
        </div>
      </div>
    )
  }

  const { image, title, desc } = data as MockDataArtikelI
  return (
    <div className="min-w-[300px] max-w-[500px] rounded-[6px] bg-white">
      <section className="w-full">
        <Image src={image} alt="artikel1" className="w-full max-w-[500px] object-cover" priority />
      </section>
      <div className="px-[15px] py-[17px]">
        <h1 className="font-heading-4">{title}</h1>
        <p className="font-body-4">{desc}</p>
      </div>
    </div>
  )
}
