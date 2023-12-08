import { Button } from "antd"
import { FoodI } from "model/foodInterface"

interface ListCardDetailI {
  data: FoodI
  showButtonBuy?: boolean
  onClickBuy?: () => void
}

export default function ListCardDetail({ data, onClickBuy, showButtonBuy = true, ...props }: ListCardDetailI) {
  return (
    <>
      <div {...props} className="flex flex-1 gap-[12px]">
        <div className="h-[110px] w-[100px] overflow-hidden rounded-md">
          <img src={data.image as string} alt="data" className="h-[110px] w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <p className="font-body-3 max-w-max rounded-[12px] bg-[#E5FFE8] px-[10px] py-[2px] text-[#08B573]">
            {data.formQuality}
          </p>
          <h1 className="font-heading-4">{data.name}</h1>
          {showButtonBuy && (
            <Button onClick={onClickBuy} className="button-green-primary h-[30px] max-w-[80px] text-[10px]">
              Beli
            </Button>
          )}
          {!showButtonBuy && (
            <p className="font-body-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. asd suas oasdi</p>
          )}
        </div>
      </div>
    </>
  )
}
