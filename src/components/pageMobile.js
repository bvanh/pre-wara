import React from "react";
import Page1 from "./page1";
import Page2 from "./page2/index";
import Footer from "./page2/footer";

const PageMobile = () => {
  return (
    <div className="">
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );
};
export default PageMobile;
