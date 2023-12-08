import { Button, Col, Form, FormInstance, Input, Row } from "antd"
import { RefObject } from "react"

interface FormLogin {
  form: RefObject<FormInstance<any>>
  handleLogin: (value: { phone: string }) => Promise<void>
}

export default function FormLoginCustom({ form, handleLogin }: FormLogin) {
  return (
    <Form ref={form} onFinish={handleLogin}>
      <Row gutter={[5, 12]}>
        <Col span={4}>
          <Input className="input-large max-w-[70px] text-center" value={"+62"} disabled />
        </Col>
        <Col span={20}>
          <Form.Item
            className="m-0"
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input className="input-large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item className="mt-[24px]">
        <Button htmlType="submit" className="button-green-primary">
          MASUK
        </Button>
      </Form.Item>
    </Form>
  )
}
