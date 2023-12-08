import { FormInstance } from "antd/lib/form"

import { useRef } from "react"
import { useAuthGuardContext } from "usecases/authGuardContext"
import FormLoginCustom from "./views/presentation/formLogin"
import HeaderLogin from "./views/presentation/header"

export default function Login() {
  const formRef = useRef<FormInstance>(null)

  const { handleLogin } = useAuthGuardContext()

  return (
    <section suppressHydrationWarning className="container-center h-screen">
      <div className="flex flex-1 flex-col gap-[24px]">
        <HeaderLogin />
        <FormLoginCustom form={formRef} handleLogin={handleLogin!} />
      </div>
    </section>
  )
}
