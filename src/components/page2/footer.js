import React from "react";
import { Row, Col } from "antd";
import { imgPage2 } from "../../ultils/importImg";
const Footer = () => {
  return (
    <Row className="footer" justify="center">
      <img src={imgPage2["footer_top.png"]} width="100%" />
      <Col span={21} lg={{span:16}} className='footer-container'>
        <Row>
          <Col span={16}>
            <div className='footer'>
              <img src={imgPage2["logo_clappi.png"]} className='footer-logo'/>
              <img src={imgPage2["logo_lussom.png"]} className='footer-logo'/>
            </div>
            <h3>Wara</h3>
            <p>Vận hành bởi Lussom.Co.Ltd</p>
            <p>Địa chỉ: 27</p>
            <p>Email: lussom.co@gmail.com</p>
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Footer;
