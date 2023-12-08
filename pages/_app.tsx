import { AppProps } from "next/app"
import "../styles/tailwind.css"
import { AuthGuardContextProvider } from "usecases/authGuardContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthGuardContextProvider>
      <Component {...pageProps} />
    </AuthGuardContextProvider>
  )
}

export default MyApp
