import { Button } from "antd"
import Image from "next/image"
import { NextRouter } from "next/router"
import goodProduct from "assets/product-good.png"

export default function ResultML({ description, router }: { description: string; router: NextRouter }) {
  return (
    <div>
      <div className="mt-[15px]">
        <h1 className="font-heading-1 text-black">Hasil Analisa</h1>
        <p className="font-body-2">{description}</p>

        <div className="flex items-center justify-center">
          <Image src={goodProduct} alt="a" />
        </div>

        <Button onClick={() => router.push("/pickup")} className="button-green-primary">
          KIRIM
        </Button>
      </div>
    </div>
  )
}
