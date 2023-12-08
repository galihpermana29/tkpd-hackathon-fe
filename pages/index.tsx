import Head from "next/head"
import { useRouter } from "next/router"
import { useFoodDetails } from "usecases/useGetDetailFoods"
import { useFoodList } from "usecases/useGetFoods"
import { useFoodDialog } from "usecases/useOpenDrawerDetail"
import DrawerBottomDetail from "./food/views/presentation/drawerBottom"
import HeaderHome from "./views/presentation/header"
import SectionArticle from "./views/presentation/sectionArticle"
import SectionCategory from "./views/presentation/sectionCategory"
import SectionFood from "./views/presentation/sectionFood"

export default function Web() {
  const foodList = useFoodList("all")
  const detail = useFoodDetails()
  const { open, handleClickBuy, setOpen } = useFoodDialog("/")

  const router = useRouter()

  const onClose = () => {
    setOpen(false)
  }

  const handleCreateTransaction = () => {
    router.push("/order")
  }

  return (
    <div>
      <Head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Go Waste</title>
      </Head>

      <section className="bg-white dark:bg-gray-900">
        <HeaderHome router={router} />
        <SectionArticle />
        <SectionCategory handleClickDetail={(id) => router.push(`/food/${id}`)} />
        <SectionFood onClickCard={handleClickBuy} data={foodList} />
        <DrawerBottomDetail
          data={detail}
          onClose={onClose}
          open={open}
          handleCreateTransaction={handleCreateTransaction}
        />
      </section>
    </div>
  )
}
