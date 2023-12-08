import { UserI } from "./userInterface"

export interface AuthGuardContextI {
  children: JSX.Element
}

export interface InitialAuthContextValueI extends UserI {
  handleLogin?: (value: { phone: string }) => Promise<void>
  handleLogout?: () => void
}
