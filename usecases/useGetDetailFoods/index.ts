import { message } from "antd"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FoodI } from "model/foodInterface"
import { ApiCMS } from "repository/apiService"

export const useFoodDetails = () => {
  const router = useRouter()
  const [detail, setDetail] = useState<FoodI>({})

  const getFoodById = async (queryId: string) => {
    try {
      const { data } = await ApiCMS.getFoodByID(queryId)
      setDetail(data)
    } catch (error) {
      message.error(error as string)
    }
  }

  useEffect(() => {
    const queryParams = router.query.foodId as string
    if (queryParams) {
      getFoodById(queryParams)
    }
  }, [router.query])

  return detail
}
