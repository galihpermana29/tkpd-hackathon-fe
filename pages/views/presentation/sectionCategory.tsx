import Image from "next/image"
import { categoryData } from "model/mockData"

interface SectionCategoryI {
  handleClickDetail: (id: string) => void
}

export default function SectionCategory({ handleClickDetail }: SectionCategoryI) {
  return (
    <section className="mx-[20px]">
      <h1 className="font-heading-2 mt-[20px]">Lagi mau mamam apa?</h1>
      <section className="mt-[15px]">
        <div className="flex w-full gap-[20px] overflow-x-scroll ">
          {categoryData.map((data, idx) => {
            return (
              <div key={idx} className="flex-1 cursor-pointer" onClick={() => handleClickDetail(data.id)}>
                <div>
                  <Image src={data.image} alt="image" className="w-full" />
                </div>
                <p className="font-heading-5 mt-[5px] text-center">{data.name}</p>
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}
