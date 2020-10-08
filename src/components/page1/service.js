import React from "react";
import { imgProgress } from "../../ultils/importImg";
const listPopup = {
  REGISTER: "register",
  STEP: "step",
  RULE: "rule",
  SUCCESS: "success",
};
const listBtnHeader = [
  { id: 2, name: "dk_btn.png", link: "https://clappigames.com/news" },
  { id: 3, name: "home_btn.png", link: "https://wara.lussom.com/" },
  { id: 4, name: "fan_btn.png", link: "https://www.facebook.com/WARAVN/" },
];
const listTabMenu = [
  { id: 12, link: "https://wara.clappigames.com" },
  { id: 13, link: "https://clappigames.com/news" },
  { id: 14, link: "https://www.facebook.com/WARAVN/" },
];
const listBtnRules = [
  { id: 22, src: "rule_btn.png" },
  { id: 23, src: "register_btn.png" },
  { id: 24, src: "featrue_btn.png" },
];
const listProgress = [
  {
    id: 6,
    gold: 200,
    ruby: 150,
    step: 10101,
    srcStep: "11",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_ld_end_em",
    srcPr: "pr_ld_end",
    srcPrPass: "pr_ld_end_full",
  },
  {
    id: 5,
    gold: 200,
    ruby: 50,
    step: 10000,
    srcStep: "10",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_em_2",
    srcPr: "pr_ld_2",
    srcPrPass: "pr_ld_full2",
  },
  {
    id: 4,
    gold: 100,
    ruby: 25,
    step: 8000,
    srcStep: "8",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_em_2",
    srcPr: "pr_ld_2",
    srcPrPass: "pr_ld_full2",
  },
  {
    id: 3,
    gold: 100,
    ruby: 25,
    step: 5000,
    srcStep: "5",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_em_2",
    srcPr: "pr_ld_2",
    srcPrPass: "pr_ld_full2",
  },
  {
    id: 2,
    gold: 100,
    ruby: 25,
    step: 2000,
    srcStep: "2",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_em_2",
    srcPr: "pr_ld_2",
    srcPrPass: "pr_ld_full2",
  },
  {
    id: 1,
    gold: 100,
    ruby: 25,
    step: 1000,
    srcStep: "1",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_em_1",
    srcPr: "pr_ld_1",
    srcPrPass: "pr_full_1",
  },
];
const printPrBar = (currentMail, val, index) => {
  if (index === 0) {
    if (currentMail >= val.step) {
      return (
        <img
          src={imgProgress[`${val.srcPrPass}.png`]}
          className="progress-step"
        />
      );
    } else {
      return (
        <img
          src={imgProgress[`${val.srcPrEmtry}.png`]}
          className="progress-step"
        />
      );
    }
  }
  if (index !== 0) {
    if (index === 5) {
      if (currentMail >= 0 && currentMail < listProgress[index - 1].step) {
        return (
          <img
            src={imgProgress[`${val.srcPr}.png`]}
            className="progress-step"
          />
        );
      }
      if (currentMail >= listProgress[index - 1].step) {
        return (
          <img
            src={imgProgress[`${val.srcPrPass}.png`]}
            className="progress-step"
          />
        );
      }
    } else {
      if (currentMail < val.step) {
        return (
          <img
            src={imgProgress[`${val.srcPrEmtry}.png`]}
            className="progress-step"
          />
        );
      }
      if (
        currentMail >= val.step &&
        currentMail < listProgress[index - 1].step
      ) {
        return (
          <img
            src={imgProgress[`${val.srcPr}.png`]}
            className="progress-step"
          />
        );
      }
      if (currentMail >= listProgress[index - 1].step) {
        return (
          <img
            src={imgProgress[`${val.srcPrPass}.png`]}
            className="progress-step"
          />
        );
      }
    }
  }
};
export {
  listBtnHeader,
  listTabMenu,
  listBtnRules,
  listProgress,
  printPrBar,
  listPopup,
};
