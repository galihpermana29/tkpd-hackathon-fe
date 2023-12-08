import { Button, DatePicker, Form, Input, Select } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { FoodI } from "model/foodInterface"

interface FormDetailI {
  handleDonate: (value: FoodI) => void
}
export default function FormDetail({ handleDonate }: FormDetailI) {
  return (
    <div className="mt-[15px]">
      <h1 className="font-heading-1 text-black">Data Makanan</h1>
      <p className="font-body-2">Isi data-data di bawah ini dengan benar untuk mendonasikan makanan mu</p>
      <Form onFinish={(value) => handleDonate(value)}>
        <Form.Item rules={[{ required: true, message: "Please input your food name!" }]} name={"name"}>
          <Input className="input-large" placeholder="Food Name" />
        </Form.Item>
        <Form.Item name={"category"} rules={[{ required: true, message: "Please input your food category!" }]}>
          <Select
            placeholder="Food Category"
            style={{ width: "100%" }}
            options={[
              { value: "fruit", label: "Fruit" },
              { value: "vegetable", label: "Vegetables" },
              { value: "pastry", label: "Pastry" },
              { value: "others", label: "Other" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={"purchaseDate"}
          rules={[{ required: true, message: "Please input your food purchased date!" }]}
        >
          <DatePicker className="input-large" placeholder="Date Purchased" />
        </Form.Item>
        <Form.Item name={"storedIn"} rules={[{ required: true, message: "Please input your stored in!" }]}>
          <Select
            placeholder="Food Stored In"
            style={{ width: "100%" }}
            options={[
              { value: "refrigerator", label: "Refrigerator" },
              { value: "room-temperature", label: "Room-Temperature" },
            ]}
          />
        </Form.Item>
        <Form.Item name={"formQuality"} rules={[{ required: true, message: "Please input your food quality!" }]}>
          <Select
            placeholder="Food Physical Looks"
            style={{ width: "100%" }}
            options={[
              { value: "good", label: "Good" },
              { value: "bad", label: "Bad" },
            ]}
          />
        </Form.Item>
        <Form.Item name={"tasteQuality"} rules={[{ required: true, message: "Please input your food quality!" }]}>
          <Select
            placeholder="Food Taste Condition"
            style={{ width: "100%" }}
            options={[
              { value: "good", label: "Good" },
              { value: "bad", label: "Bad" },
            ]}
          />
        </Form.Item>
        <Form.Item name={"description"}>
          <TextArea placeholder="Description" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="button-green-primary">
            SELANJUTNYA
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
