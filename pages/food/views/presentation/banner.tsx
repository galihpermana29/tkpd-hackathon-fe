import Image from "next/image"
import detailBanner from "assets/detailBanner.png"
import logoBanner from "assets/logo-banner.png"

export default function Banner() {
  return (
    <div className="relative h-[300px] w-full">
      <Image src={detailBanner} alt="detailBanner" className="h-[300px] w-full object-cover" />
      <p className="font-heading-2 absolute left-[20px] top-[20px] text-white">Pastry</p>
    </div>
  )
}

interface ShortBannerI {
  title: string
  desc: string
}

export function ShortBanner({ title, desc }: ShortBannerI) {
  return (
    <div className="mt-[15px] flex items-center gap-[20px] rounded-[8px] bg-[#FCD8CE] p-[15px]">
      <div className="">
        <Image src={logoBanner} alt="logobanner" className="w-[100px]" />
      </div>
      <div>
        <h1 className="font-heading-5">{title}</h1>
        <p className="font-body-4 mt-[5px]">{desc}</p>
      </div>
    </div>
  )
}
