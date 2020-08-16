import React from "react";
import { FullPage, Slide } from "react-full-page";
import { isMobile } from "react-device-detect";
import Page1 from "./page1";
import Page2 from "./page2/index";
import Footer from "./page2/footer";

const PageBrowser = () => {
  return (
    <div className="Page-container">
      <FullPage scrollMode={isMobile?"normal":'full-page'}>
        <Slide>
          <Page1 />
        </Slide>
        <Slide>
          <Page2 />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </div>
  );
};
export default PageBrowser;
