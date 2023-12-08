import { Button, Form } from "antd"
import Image from "next/image"

import blankUpload from "assets/blankUpload.png"

interface UploadImageI {
  handleUploadBukti: (value: Blob | null) => void
  imageUrl: string | null
  handleDonate: () => void
}

export default function UploadImage({ handleUploadBukti, imageUrl, handleDonate }: UploadImageI) {
  return (
    <div>
      <div className="mt-[15px]">
        <h1 className="font-heading-1 text-black">Upload Makanan</h1>
        <p className="font-body-2">Untuk memastikan kualitas makanan yang akan kamu donasikan, yuk upload fotonya</p>

        {imageUrl && (
          <div className="mt-[15px] h-[200px] w-full overflow-hidden rounded-lg border-2">
            <img className="h-[200px] w-full object-cover" src={imageUrl} alt="url" />
          </div>
        )}

        {!imageUrl && (
          <div>
            <div className="my-[15px]">
              <Image src={blankUpload} alt="blank" />
            </div>
            <div className="inputWrapper button-green-primary">
              Upload Image
              <input
                accept="image/*"
                type="file"
                id="myFile"
                name="filename"
                className="fileInput mt-[10px]"
                onChange={(e) => handleUploadBukti(e.target.files![0])}
              />
            </div>
          </div>
        )}

        <Button onClick={handleDonate} className="button-green-primary">
          KIRIM
        </Button>
      </div>
    </div>
  )
}
