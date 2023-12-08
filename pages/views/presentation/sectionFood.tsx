import { FoodI } from "model/foodInterface"
import CustomCardGeneral from "./customCard"

interface SectionFoodI {
  onClickCard: (id: number) => void
  data: FoodI[]
}
export default function SectionFood({ onClickCard, data }: SectionFoodI) {
  return (
    <section>
      <h1 className="font-heading-2 m-[20px]">Makanan di Go-Waste terdekatmu</h1>
      <div className="flex justify-center">
        <div className="mx-[20px] flex w-full gap-[20px] overflow-x-scroll">
          {data.map((data, idx) => {
            return (
              <div key={idx} className="flex-1">
                <CustomCardGeneral
                  data={data}
                  usedFor="food"
                  onClickFoodCard={() => onClickCard(Number(data?.id as string))}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
