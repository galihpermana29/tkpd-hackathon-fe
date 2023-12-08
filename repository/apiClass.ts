import axios, { AxiosError, AxiosInstance } from "axios"
import { ErrorResponseI } from "model/apiInterface"

export class ApiClass {
  public baseURL: string
  private config: Record<string, any>
  public axiosInstance: AxiosInstance

  constructor(baseURL?: string, config?: Record<string, any>) {
    this.baseURL = "http://localhost:8000/v1/"

    this.config = config || {}

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      ...this.config,
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error) {
          const axiosError = error as AxiosError // Cast error to AxiosError
          const responseData = axiosError.response?.data as ErrorResponseI | undefined
          const err = responseData ? responseData?.message : "Ouch, an error happen!"

          return err
        }

        return Promise.reject(error)
      }
    )
  }

  public setNewUrl(url: string) {
    return new Promise((resolve, reject) => {
      this.baseURL = url
      this.setupInterceptors() // Re-setup interceptors with the new URL
      resolve("")
    })
  }
}
