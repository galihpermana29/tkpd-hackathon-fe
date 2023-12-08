import { Button, Divider, Drawer } from "antd"
import { FoodI } from "model/foodInterface"
import { ShortBanner } from "./banner"
import ListCardDetail from "./listCardDetail"

interface DrawerBottomI {
  onClose: () => void
  open: boolean
  handleCreateTransaction: () => void
  data: FoodI
}

export default function DrawerBottomDetail({ onClose, open, handleCreateTransaction, data }: DrawerBottomI) {
  return (
    <Drawer height={500} placement={"bottom"} closable={false} onClose={onClose} open={open} className="rounded-[12px]">
      <div className="m-0">
        <ListCardDetail showButtonBuy={false} data={data} />
        <DetailMakanan data={data} />
        <Divider />
        <DetailPemesanan />
        <ShortBanner
          desc="Terima kasih atas kontribusimu dalam mengurangi sampah makanan"
          title="Kamu tidak dikenakan biaya kirim jika mendatangi langsung Go-Waste branch terdekat"
        />
        <div className="mt-[15px] flex flex-col gap-[15px]">
          <Button className="button-green-primary text-[12px]" onClick={handleCreateTransaction}>
            Beli pakai driver gojek
          </Button>
          <Button className="button-green-bordered text-[12px]">Pick up sendiri di Go-Waste</Button>
        </div>
      </div>
    </Drawer>
  )
}

function DetailPemesanan() {
  return (
    <div>
      <p className="font-heading-3 mt-[15px]">Detail Pesanan</p>
      <div className="mt-[15px] flex">
        <div className="flex-[50%]">
          <p className="font-heading-4">Biaya Driver</p>
        </div>
        <div className="flex-[50%]">
          <p className="font-heading-4">Rp. 15,000</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex-[50%]">
          <p className="font-heading-4">Harga Makanan</p>
        </div>
        <div className="flex-[50%]">
          <p className="font-heading-4">Rp. 0</p>
        </div>
      </div>
      <Divider className="my-[10px]" />
      <div className="flex">
        <div className="flex-[50%]">
          <p className="font-heading-4">Total Harga</p>
        </div>
        <div className="flex-[50%]">
          <p className="font-heading-4">Rp. 15,000</p>
        </div>
      </div>
    </div>
  )
}
function DetailMakanan({ data }: { data: FoodI }) {
  const { purchaseDate, formQuality, tasteQuality, storedIn } = data
  return (
    <div>
      <p className="font-heading-3 mt-[15px]">Detail Makanan</p>
      <div className="mt-[15px] flex">
        <div className="flex-[50%]">
          <p className="font-heading-4">Tanggal Pembelian</p>
          <p className="font-body-3">{purchaseDate}</p>
        </div>
        <div className="flex-[50%]">
          <p className="font-heading-4">Kualitas Fisik</p>
          <p className="font-body-3">{formQuality}</p>
        </div>
      </div>
      <div className="mt-[15px] flex">
        <div className="flex-[50%]">
          <p className="font-heading-4">Cara Penyimpanan</p>
          <p className="font-body-3">{tasteQuality}</p>
        </div>
        <div className="flex-[50%]">
          <p className="font-heading-4">Kualitas Rasa</p>
          <p className="font-body-3">{storedIn}</p>
        </div>
      </div>
    </div>
  )
}
