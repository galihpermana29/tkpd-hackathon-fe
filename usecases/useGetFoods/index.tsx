import { message } from "antd"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { useEffect, useState } from "react"
import { FoodI } from "model/foodInterface"
import { ApiCMS } from "repository/apiService"

export const useFoodList = (purpose: "all" | "category" = "all", params?: Params) => {
  const [food, setFood] = useState<FoodI[]>([])

  const getAllFoods = async () => {
    try {
      const { data } = await ApiCMS.getAllFoods()
      setFood(data)
    } catch (error) {
      message.error(error as string)
    }
  }

  const getAllFoodsByCategory = async () => {
    try {
      const { data } = await ApiCMS.getAllFoodsByCategory(params?.id as string)
      setFood(data)
    } catch (error) {
      message.error(error as string)
    }
  }

  useEffect(() => {
    if (purpose === "all") {
      getAllFoods()
    }
  }, [])

  useEffect(() => {
    if (purpose === "category") {
      if (params?.id) {
        getAllFoodsByCategory()
      }
    }
  }, [params])

  return food
}
