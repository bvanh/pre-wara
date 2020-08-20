import React, { useState } from "react";
import { Row, Col } from "antd";
import Footer from "./footer";
import { listFeature } from "./service";
import { imgPage2 } from "../../ultils/importImg";
import "./style.scss";
const Page2 = () => {
  const [isFeature, setIsFeature] = useState(1);
  const printListFeature = listFeature.map((val) => (
    <a key={val.id} onClick={() => setIsFeature(val.id)}>
      <img
        src={
          val.id === isFeature
            ? imgPage2[`btn_featrue_${val.src_active}.png`]
            : imgPage2[`btn_featrue_${val.src}.png`]
        }
        className="btn-features"
      />
    </a>
  ));
  return (
    <Row justify="center" className="page2">
      <Col span={16}  className='page2-section'>
        <Row align="top">
          <Col span={6} style={{ position: "relative" }}>
            <img
              src={imgPage2["btn_featrue_header.png"]}
              className="btn-feature-header"
            />
            {printListFeature}
          </Col>
          <Col span={18} style={{ position: "relative", paddingLeft: "1rem" }}>
            <img
              src={imgPage2["frame_feature2.png"]}
              width="100%"
              className="frame-feature"
            />
            <img
              src={imgPage2[`feature_${isFeature}.png`]}
              className="img-feature"
            />
            <img
              src={imgPage2["character_2.png"]}
              className="frame-feature-c"
            />
          </Col>
        </Row>
      </Col>
      {/* <Footer/> */}
    </Row>
  );
};

export default Page2;
