import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import HeaderHome from "pages/views/presentation/header"
import { useFoodDetails } from "usecases/useGetDetailFoods"
import { useFoodList } from "usecases/useGetFoods"
import { useFoodDialog } from "usecases/useOpenDrawerDetail"
import Banner from "./views/presentation/banner"
import DrawerBottomDetail from "./views/presentation/drawerBottom"
import SectionFood from "./views/presentation/sectionFood"

export default function DetailFood() {
  const params = useParams()
  const detail = useFoodDetails()
  const router = useRouter()

  const { open, handleClickBuy, setOpen } = useFoodDialog(`/food/${params?.id}/`)
  const foodList = useFoodList("category", params)

  const onClose = () => {
    setOpen(false)
  }

  const handleCreateTransaction = () => {
    router.push("/order")
  }

  return (
    <div>
      <Banner />
      <HeaderHome router={router} />
      <SectionFood onClickBuy={handleClickBuy} food={foodList} />
      <DrawerBottomDetail
        onClose={onClose}
        open={open}
        handleCreateTransaction={handleCreateTransaction}
        data={detail}
      />
    </div>
  )
}
