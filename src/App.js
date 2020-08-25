import React from "react";
import PageBrowser from "./components/pageBrowser";
import { withOrientationChange, isMobileOnly } from "react-device-detect";
import "./App.scss";
import { imgApp } from "./ultils/importImg";

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
      return (
        <div className="bg-rotate">
          <img src={imgApp['rotate-phone.png']} className='rotate-phone'/>
          <h3 className="alert-rotate">
            Vui lòng quay ngang thiết bị để bắt đầu!
          </h3>
        </div>
      );
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
