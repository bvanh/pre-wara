import React, { useRef } from "react";
import { FullPage, Slide } from "react-full-page";
import { isMobile } from "react-device-detect";
import Page1 from "./page1";
import Page2 from "./page2/index";
import Footer from "./page2/footer";

const PageBrowser = () => {
  const inputEl = useRef(null);
  const scrollToPage2 = () => {
    inputEl.current.scrollToSlide(1);
  };
  return (
    <div className="Page-container">
      <FullPage scrollMode={isMobile ? "normal" : "full-page"} ref={inputEl}>
        <Slide>
          <Page1 scrollToPage2={scrollToPage2} />
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
