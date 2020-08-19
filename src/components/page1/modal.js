import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { sendInfo } from "../../api/baseApi";
import { validateEmail, validatePhone } from "../../ultils/validate";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};
const FormRegister = (props) => {
  const { visible } = props.modalIndex;
  const { offModal } = props;
  const [validateIndex, setValidateIndex] = useState({
    status: "",
    textHelp: null,
    textSuccess: null,
  });
  const { status, textHelp, textSuccess } = validateIndex;
  const onFinish = (values) => {
    const { mail, phone } = values;
    if (validateEmail(mail)) {
      sendInfo(setValidateIndex, validateIndex, values);
    } else {
      setValidateIndex({ status: "error", textHelp: "Kiểm tra lại email !" });
    }
  };
  return (
    <>
      <Modal
        title="Đăng ký sớm"
        visible={visible}
        onOk={offModal}
        onCancel={offModal}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="mail"
            validateStatus={status}
            help={textHelp}
          >
            <Input
              onMouseDown={() =>
                setValidateIndex({
                  status: "",
                  textHelp: null,
                  textSuccess: null,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone" help={textSuccess}>
            <Input type="number" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default FormRegister;
