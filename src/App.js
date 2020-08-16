import React from "react";
import PageBrowser from "./components/pageBrowser";
import PageMobile from './components/pageMobile'
import { withOrientationChange, isMobileOnly } from "react-device-detect";
import { imgApp } from "./ultils/importImg";
import "./App.scss";

function App(props) {
  const { isLandscape, isPortrait } = props;
  if (isMobileOnly) {
    if (isLandscape) {
      return (
        <div className="App">
          {/* <img src={imgApp["bg.png"]} className="bg-mobile" /> */}
          <PageBrowser />
        </div>
      );
    }
    if (isPortrait) {
      return <div>The device is in Portrait mode</div>;
    }
  }
  return (
    <div className="App">
      {/* <img src={imgApp["bg.png"]} className="bg-mobile" /> */}
      <PageBrowser />
    </div>
  );
}
App = withOrientationChange(App);
export default App;
