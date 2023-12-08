import { Button, Input } from "antd"
import { NextRouter } from "next/router"

export default function HeaderHome({ router }: { router: NextRouter }) {
  return (
    <header className="flex gap-[15px] bg-white p-[16px]">
      <Input placeholder="Cari Makanan" className="input-large h-[40px]" />
      <Button className="button-green-primary h-[40px] max-w-[115px]" onClick={() => router.push("/donate")}>
        DONASI
      </Button>
    </header>
  )
}
