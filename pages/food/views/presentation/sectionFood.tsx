import { FoodI } from "model/foodInterface"
import ListCardDetail from "./listCardDetail"

interface SectionFoodI {
  onClickBuy: (id: number) => void
  food: FoodI[]
}

export default function SectionFood({ onClickBuy, food }: SectionFoodI) {
  return (
    <section>
      <h1 className="font-heading-2 m-[20px]">Pastry di Go-Waste terdekatmu</h1>
      <div className="flex justify-center">
        <div className="mx-[20px] flex w-full flex-col gap-[20px] overflow-x-scroll">
          {food.map((data, idx) => {
            return <ListCardDetail data={data} key={idx} onClickBuy={() => onClickBuy(Number(data.id))} />
          })}
        </div>
      </div>
    </section>
  )
}
