import React, { useState } from "react";
import { Row, Col } from "antd";
import { imgPage1, imgProgress } from "../../ultils/importImg";
import { printPrBar } from "./service";
import { CaretRightOutlined } from "@ant-design/icons";
import FormResgister from "./modal";
import "./style.scss";
import {
  listBtnHeader,
  listTabMenu,
  listBtnRules,
  listProgress,
} from "./service";
import FormRegister from "./modal";
const Page1 = (props) => {
  const { scrollToPage2, currentMail } = props;
  const [modalIndex, setModalIndex] = useState({
    visible: true,
  });
  const offModal = () => {
    setModalIndex({ ...modalIndex, visible: false });
  };
  const onModal = () => {
    setModalIndex({ ...modalIndex, visible: true });
  };
  const triggerRule = (val) => {
    switch (val) {
      case 2:
        scrollToPage2();
        break;
      case 1:
        onModal();
      default:
        break;
    }
  };
  const checkRw = (valMail, step) => {
    const isRwPass = valMail - step;
    if (isRwPass <= 0) {
      return true;
    }
    return false;
  };
  const printBtnHeader = listBtnHeader.map((val) => (
    <Col
      span={val.id === 3 ? 4 : 3}
      lg={val.id === 3 ? { span: 3 } : { span: 2 }}
      key={val.id}
    >
      <a href={val.link} target="_blank">
        <img src={imgPage1[val.name]} width="100%" alt={val.name} />
      </a>
    </Col>
  ));
  const printBtnRule = listBtnRules.map((val, i) => (
    <Col
      span={val.id === 23 ? 4 : 3}
      lg={val.id === 23 ? { span: 3 } : { span: 2 }}
      key={val.id}
    >
      <a href={val.link} target="_blank" onClick={()=>triggerRule(i)}>
        <img src={imgPage1[val.src]} width="100%" />
      </a>
    </Col>
  ));
  const printListTabMn = listTabMenu.map((val) => (
    <a key={val.id} href={val.link} width="100%"></a>
  ));
  const printProgress = listProgress.map((val, index) => {
    return (
      <div className={`progress-container bg-pr-${index}`} key={val.id}>
        <img
          src={imgProgress[`${val.srcStep}_register.png`]}
          className={`step ${val.step > 8000 ? "step-large" : ""}`}
        />
        <img
          src={
            imgProgress[
              `${
                checkRw(currentMail, val.step) ? val.srcRw : val.srcRwPass
              }.png`
            ]
          }
          className="reward"
        />
        {printPrBar(currentMail, val, index)}
      </div>
    );
  });
  return (
    <div className="page1">
      <Row type="flex" justify="center" align="top" className="header">
        {printBtnHeader}
      </Row>
      <Row className="section" justify="center">
        <Col
          span={14}
          xl={{ span: 14 }}
          lg={{ span: 16 }}
          xxl={{ span: 12 }}
          className="frame-video"
        >
          <img src={imgPage1["bg_video.png"]} width="100%" />
          <img src={imgPage1["logo_btn.png"]} className="logo" />
        </Col>
        <Col className="menu">{printListTabMn}</Col>
        {/* <div className="control-menu">
          <CaretRightOutlined className="icon-control-tab-menu" />
        </div> */}
        <div className="progress">
          {printProgress}
          <img src={imgProgress["text_regis.png"]} className="text-regis" />
        </div>
      </Row>
      <Row type="flex" justify="center" align="top" className="header">
        {printBtnRule}
      </Row>
      <FormRegister modalIndex={modalIndex} offModal={offModal} />
    </div>
  );
};
export default Page1;
