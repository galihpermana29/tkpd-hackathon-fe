import { useRouter } from "next/router"
import { useState } from "react"

export const useFoodDialog = (path: string = "/") => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleClickBuy = (id: number) => {
    setOpen(true)
    router.push({ pathname: path, query: { foodId: id } })
  }

  return { open, handleClickBuy, setOpen }
}
