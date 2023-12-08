import { LeftOutlined } from "@ant-design/icons"
import { NextRouter, useRouter } from "next/router"

interface HeaderBackI {
  router: NextRouter
  title?: string
}
export default function HeaderBack({ router, title = "Makanan Sedang Diantar" }: HeaderBackI) {
  return (
    <header className="fixed inset-x-0 z-[2000] flex justify-between gap-[15px] bg-white p-[16px]">
      <div className="cursor-pointer" onClick={() => router.back()}>
        <LeftOutlined />
      </div>
      <h1 className="font-heading-3">{title}</h1>
      <div className=""></div>
    </header>
  )
}
