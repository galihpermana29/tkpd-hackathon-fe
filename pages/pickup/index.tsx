import Image from "next/image"
import { useRouter } from "next/router"
import mapImg from "assets/map.png"
import HeaderBack from "pages/order/views/presentation/headerBack"
import DrawerBottomOrder from "./views/presentation/drawerBottom"

export default function OrderFood() {
  const router = useRouter()
  return (
    <div>
      <HeaderBack router={router} title=" Makanan Dijemput" />
      <div className="h-[400px]">
        <Image src={mapImg} alt="map" className="h-[400px] object-cover" />
      </div>
      <DrawerBottomOrder router={router} />
    </div>
  )
}
