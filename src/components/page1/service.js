import React from "react";
import { imgProgress } from "../../ultils/importImg";
const listBtnHeader = [
  { id: 2, name: "dk_btn.png", link: "https://clappigames.com/register" },
  { id: 3, name: "home_btn.png", link: "https://wara.clappigames.com/" },
  { id: 4, name: "fan_btn.png", link: "" },
];
const listTabMenu = [
  { id: 12, link: "" },
  { id: 13, link: "" },
  { id: 14, link: "" },
];
const listBtnRules = [
  { id: 22, src: "rule_btn.png" },
  { id: 23, src: "register_btn.png" },
  { id: 24, src: "featrue_btn.png" },
];
const listProgress = [
  {
    id: 6,
    step: 10001,
    srcStep: "11",
    srcRw: "rw_false",
    srcRwPass: "rw_true",
    srcPrEmtry: "pr_ld_end_em",
    srcPr: "pr_ld_end",
    srcPrPass: "pr_ld_end_full",
  },
  {
    id: 5,
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
    step: 0,
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
export { listBtnHeader, listTabMenu, listBtnRules, listProgress, printPrBar };
