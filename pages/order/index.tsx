import Image from "next/image"
import { useRouter } from "next/router"
import mapImg from "assets/map.png"
import DrawerBottomOrder from "./views/presentation/drawerBottom"
import HeaderBack from "./views/presentation/headerBack"

export default function OrderFood() {
  const router = useRouter()
  return (
    <div>
      <HeaderBack router={router} />
      <div className="h-[400px]">
        <Image src={mapImg} alt="map" className="h-[400px] object-cover" />
      </div>
      <DrawerBottomOrder router={router} />
    </div>
  )
}
