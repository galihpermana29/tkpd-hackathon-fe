import { UseCheckLocalStorageI } from "model/useCheckLocalStorageInterface"
import { UserI } from "model/userInterface"

type keywordLocalStorage = "user" | string

export default function UseCheckLocalStorage(keyword: keywordLocalStorage): UseCheckLocalStorageI {
  if (typeof window !== "undefined")
    return localStorage.getItem(keyword) ? (JSON.parse(localStorage.getItem(keyword)!) as UserI) : {}
  return {}
}
