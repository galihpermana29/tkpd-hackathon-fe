import { FoodI } from "./foodInterface"
import { UserI } from "./userInterface"

export interface ApiGlobalResponseI {
  status?: number
  message?: string
}

export interface LoginPayloadI {
  phone: string
}

export interface ErrorResponseI extends ApiGlobalResponseI {}

export interface LoginResponseI {
  data: UserI & ApiGlobalResponseI
}

export interface DonateResponseI {
  data: ApiGlobalResponseI & {
    id: string
    label: string
  }
}

export interface FoodsResponseI extends ApiGlobalResponseI {
  data: FoodI[]
}

export interface FoodsDetailResponseI extends ApiGlobalResponseI {
  data: FoodI
}
