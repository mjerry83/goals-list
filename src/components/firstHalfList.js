import React from "react";
import GoalBox from "./goalBox";

const FirstHalfList = () => {
  const goal1 = "연구주제 잡아서 연구비 공모 지원하기♡";
  const goal2 = "산그림 일러스트 작가 등재 신청하기!!";
  const goal3 = "스터디 포함 논문 50개 읽기☆";
  const goal4 = "프로타고 미술 프로그램 1회 이상 진행하기 >.<";
  const goal5 = "SPSS 공부하기!!!";
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "fontContents",
      }}
    >
      <ul
        style={{
          listStyle: "None",
          padding: "1.6rem 3.2rem",
          backgroundColor: "#FFF5BA",
          borderRadius: "0.8rem",
        }}
      >
        <li>
          <GoalBox content={goal1} />
        </li>
        <li>
          <GoalBox content={goal2} />
        </li>
        <li>
          <GoalBox content={goal3} />
        </li>
        <li>
          <GoalBox content={goal4} />
        </li>
        <li>
          <GoalBox content={goal5} />
        </li>
      </ul>
    </div>
  );
};

export default FirstHalfList;
