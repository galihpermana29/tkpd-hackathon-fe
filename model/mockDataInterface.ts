import { StaticImageData } from "next/image"

export interface MockDataArtikelI {
  image: string | StaticImageData
  title: string
  desc: string
}

export interface MockCategoryI {
  image: string | StaticImageData
  name: string
  id: string
}
