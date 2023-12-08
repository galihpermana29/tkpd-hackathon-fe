import { Steps } from "antd"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { FoodI } from "model/foodInterface"
import HeaderBack from "pages/order/views/presentation/headerBack"
import { ApiCMS } from "repository/apiService"
import FormDetail from "./views/presentation/formDetail"
import ResultML from "./views/presentation/resultML"
import UploadImage from "./views/presentation/uploadImage"

export default function Donate() {
  const router = useRouter()
  const [formValue, setFormValue] = useState<FoodI | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [labelResult, setLabelResult] = useState<string | null>(null)

  const handleDonate = async () => {
    const payload = { ...formValue, purchaseDate: "09/12/2023", image: imageUrl }
    try {
      const { data } = await ApiCMS.createDonate(payload)
      setLabelResult(data.label)
    } catch (error) {
      console.log(error, "error")
    }
  }

  const handleUploadBukti = async (file: Blob | null) => {
    try {
      if (file) {
        const formData = new FormData()
        formData.append("file", file as Blob)
        const { data } = await ApiCMS.uploadImage(formData)
        setImageUrl(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <HeaderBack router={router} title="Detail Makanan" />
      <div className="mx-[20px] pt-[60px]">
        {!formValue && <FormDetail handleDonate={setFormValue} />}
        {formValue && !labelResult && (
          <UploadImage handleUploadBukti={handleUploadBukti} imageUrl={imageUrl} handleDonate={handleDonate} />
        )}
        {labelResult && (
          <div>
            {["rotten"].includes(labelResult as string) ? (
              <ResultML
                router={router}
                description="Makanan kamu dalam kondisi yang tidak baik, kamu tidak bisa mendonasikan makanan ini"
              />
            ) : (
              <ResultML
                router={router}
                description="Makanan kamu dalam kondisi yang baik, kamu bisa mendonasikan makanan ini"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
