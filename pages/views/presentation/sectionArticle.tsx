import { artikelData } from "model/mockData"
import CustomCardGeneral from "./customCard"

export default function SectionArticle() {
  return (
    <section className="">
      <section>
        <h1 className="font-heading-2 m-[20px]">Yuk, donasikan makananmu</h1>
        <section className="flex min-h-[300px] flex-col justify-center bg-[#AF0D33] px-[20px] py-[40px]">
          <h1 className="font-heading-3 mb-[15px] max-w-[200px] text-white">4 Langkah Donasikan Makananmu</h1>
          <div className="flex justify-center">
            <div className="flex w-full gap-[20px] overflow-x-scroll">
              {artikelData.map((data, idx) => {
                return (
                  <div key={idx} className="flex-1">
                    <CustomCardGeneral data={data} usedFor="artikel" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
