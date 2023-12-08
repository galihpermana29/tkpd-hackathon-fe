import axios from "axios"
import {
  DonateResponseI,
  FoodsDetailResponseI,
  FoodsResponseI,
  LoginPayloadI,
  LoginResponseI,
} from "model/apiInterface"
import { FoodI } from "model/foodInterface"
import { ApiClass } from "./apiClass"

class ApiService extends ApiClass {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(baseURL?: string, config?: Record<string, any>) {
    super(baseURL, config)
  }

  public async userLogout() {
    await this.axiosInstance.post(`/logout`, {})
  }

  public async userLogin(payload: LoginPayloadI): Promise<LoginResponseI> {
    const { data } = await this.axiosInstance.post<LoginResponseI>(`/user/login`, payload)
    return data
  }

  public async createDonate(payload: FoodI): Promise<DonateResponseI> {
    const { data } = await this.axiosInstance.post<DonateResponseI>(`/foods/donate`, payload)
    return data
  }

  public async uploadImage(formData: FormData) {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_UPLOAD as string, formData)
    return data
  }

  public async getAllFoods(): Promise<FoodsResponseI> {
    const { data } = await this.axiosInstance.get<FoodsResponseI>(`/foods`)
    return data
  }

  public async getAllFoodsByCategory(name: string): Promise<FoodsResponseI> {
    const { data } = await this.axiosInstance.get<FoodsResponseI>(`/foods?category=${name}`)
    return data
  }

  public async getFoodByID(id: string): Promise<FoodsDetailResponseI> {
    const { data } = await this.axiosInstance.get<FoodsDetailResponseI>(`/foods/${id}`)
    return data
  }
}

export const ApiCMS = new ApiService()
