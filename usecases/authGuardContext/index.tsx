import { useRouter } from "next/router"
import { createContext, useContext, useEffect, useState } from "react"
import { AuthGuardContextI, InitialAuthContextValueI } from "model/authInterface"
import { ApiCMS } from "repository/apiService"
import UseCheckLocalStorage from "usecases/useCheckLocalStorage"

let INITIAL_STATE: InitialAuthContextValueI = {}

const AuthGuardContext = createContext(INITIAL_STATE)
export const useAuthGuardContext = () => useContext(AuthGuardContext)

export const AuthGuardContextProvider = ({ children }: AuthGuardContextI) => {
  const [valueContext, setValueContext] = useState<InitialAuthContextValueI>({})

  const router = useRouter()
  const isUserLogIn = UseCheckLocalStorage("user")

  const handleLogin = async (value: { phone: string }) => {
    try {
      const data = await ApiCMS.userLogin({ phone: value.phone })
      localStorage.setItem("user", JSON.stringify(data))
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {}

  useEffect(() => {
    if (Object.keys(isUserLogIn).length === 0 && isUserLogIn.constructor === Object) {
      if (typeof window === "undefined") return
      router.push("/login")
    }
  }, [])

  return <AuthGuardContext.Provider value={{ handleLogin, handleLogout }}>{children}</AuthGuardContext.Provider>
}
