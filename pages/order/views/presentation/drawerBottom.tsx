import { Button, Drawer, Steps } from "antd"
import { NextRouter } from "next/router"
import { ShortBanner } from "pages/food/views/presentation/banner"

interface DrawerBottomI {
  router: NextRouter
}

export default function DrawerBottomOrder({ router }: DrawerBottomI) {
  return (
    <Drawer height={420} placement={"bottom"} closable={false} open={true} className="rounded-[12px]">
      <div className="mt-[15px]">
        <Steps
          direction="vertical"
          size="small"
          current={1}
          items={[
            {
              title: <p className="text-[12px]">Driver Go-jek Sedang menuju ke Branch Terdekat</p>,
            },
            {
              title: <p className="text-[12px]">Driver Go-Jek telah Mengambil Pesanan mu</p>,
            },
            {
              title: <p className="text-[12px]">Driver Go-jek sedang Menuju ke tempatmu</p>,
            },
            {
              title: <p className="text-[12px]">Makananmu sampai</p>,
            },
          ]}
        />

        <ShortBanner
          title="Kamu mendapatkan 10,000 Gopay Coins!"
          desc="Terima kasih atas kontribusimu dalam mengurangi sampah makanan"
        />

        <Button className="button-green-primary mt-[15px]" onClick={() => router.push("/")}>
          Selesai
        </Button>
      </div>
    </Drawer>
  )
}
