import React from "react";
import PageBrowser from "./components/pageBrowser";
import { withOrientationChange, isMobileOnly } from "react-device-detect";
import "./App.scss";

function App(props) {
  const { isLandscape, isPortrait } = props;
  if (isMobileOnly) {
    if (isLandscape) {
      return (
        <div className="App">
          <PageBrowser />
        </div>
      );
    }
    if (isPortrait) {
      return <h2 className='alert-rotate'>Xoay màn hình để hiện thị nội dung!</h2>;
    }
  }
  return (
    <div className="App">
      <PageBrowser />
    </div>
  );
}
App = withOrientationChange(App);
export default App;
