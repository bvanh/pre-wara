import React from "react";
import { Row, Col } from "antd";
import { imgPage2 } from "../../ultils/importImg";
const Footer = () => {
  return (
    <Row className="footer" justify="center">
      <img src={imgPage2["footer_top.png"]} width="100%" />
      <Col span={21} lg={{ span: 16 }} className="footer-container">
        <Row>
          <Col span={14} lg={{ span: 16 }}>
            <div className="footer">
              <img src={imgPage2["logo_clappi.png"]} className="footer-logo" />
              <img src={imgPage2["logo_lussom.png"]} className="footer-logo" />
            </div>
            <h3>Wara-Siêu thị vui vẻ</h3>
            <p>Công ty trách nhiệm hữu hạn Lussom Co,. Ltd</p>
            <p>
              Địa chỉ: Tầng 4, tòa nhà Eurowindow Multi Complex, số 27 Trần Duy
              Hưng, phường Trung Hòa, quận Cầu Giấy, TP.Hà Nội
            </p>
            <p>Email: lussom.co@gmail.com</p>
            <p>Điện thoại: 02438453888</p>
            <p>Người chịu trách nhiệm quản lý nội dung: Lê Huy Hoàng</p>
            <p>
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số
              69/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020
            </p>
          </Col>
          <Col span={10} lg={{ span: 8 }}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWara-100153794907838%2F&tabs=timeline&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=630380541117442"
              width="100%"
              height="80"
              // style={{}}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
              data-show-facepile="true"
            ></iframe>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Footer;
