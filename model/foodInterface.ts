import { StaticImageData } from "next/image"

export interface FoodI {
  id?: string
  name?: string
  category?: string
  purchaseDate?: string
  storedIn?: string
  formQuality?: string
  tasteQuality?: string
  description?: string
  image?: string | StaticImageData | null
}
