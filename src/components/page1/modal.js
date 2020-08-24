import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { sendInfo } from "../../api/baseApi";
import { validateEmail, validatePhone } from "../../ultils/validate";
import { imgPopup } from "../../ultils/importImg";
import { listPopup } from "./service";
const { REGISTER, RULE } = listPopup;
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
  const { visible, typePopup } = props.modalIndex;
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
  const printPopup = () => {
    switch (typePopup) {
      case REGISTER:
        return (
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
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Gửi
              </Button>
            </Form.Item>
          </Form>
        );

      case RULE:
        return (
          <div className='popup-rule'>
            <p>Hướng dẫn đăng ký sớm nhận quà :</p>
            <p>- Bước 1 : Bạn ấn vào ô ĐĂNG KÝ SỚM tại trang web</p>
            <p>
              {" "}
              - Bước 2 : Bạn điền Email và Số điện thoại theo yêu cầu tại đó
            </p>
            <p>- Bước 3 : Ấn "Gửi"</p>
            <br />
            <p>
              {" "}
              Mỗi lượt ĐĂNG KÝ SỚM sẽ được tính vào Mốc Nhận Quà. Đủ mốc quà
              nào, toàn bộ Server sẽ nhận được phần quà đó.
            </p>
            <p>
              {" "}
              Quà sẽ được gửi vào nhân vật game của bạn sau 2-4 ngày game ra mắt
              chính thức.
            </p>
            <br />
            <p>
              {" "}
              Để xem các phần quà có thể nhận được, các bạn có thể ấn vào các
              hộp quà bên góc trái để xem quà và các mốc quà yêu cầu.
            </p>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <>
      <Modal
        // title="Đăng ký sớm"
        visible={visible}
        onOk={offModal}
        onCancel={offModal}
        footer={false}
        className="popup-container"
      >
        <img src={imgPopup["bg_popup.png"]} className={`bg-popup-${typePopup}`} />
        <img src={imgPopup[`${typePopup}.png`]} className={`title-popup-${typePopup}`} />
        {printPopup()}
      </Modal>
    </>
  );
};
export default FormRegister;
