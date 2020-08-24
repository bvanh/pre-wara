import React from "react";
import { Row, Col } from "antd";
import { imgPage2 } from "../../ultils/importImg";
const Footer = () => {
  return (
    <Row className="footer" justify="center">
      <img src={imgPage2["footer_top.png"]} width="100%" />
      <Col span={21} lg={{span:16}} className='footer-container'>
        <Row>
          <Col span={14} lg={{span:16}}>
            <div className='footer'>
              <img src={imgPage2["logo_clappi.png"]} className='footer-logo'/>
              <img src={imgPage2["logo_lussom.png"]} className='footer-logo'/>
            </div>
            <h3>Wara</h3>
            <p>Vận hành bởi Lussom Co,.Ltd</p>
            <p>Địa chỉ: số 27 Trần Duy Hưng, Yên Hoà, Cầu Giấy, Hà Nội</p>
            <p>Email: lussom.co@gmail.com</p>
          </Col>
          <Col span={10} lg={{span:8}}>
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
