import React from "react";
import GoalBox from "./goalBox";

const SecondHalfList = () => {
  const goal1 = "하반기 소논문 1편 투고하기♡";
  const goal2 = "일러스트 외주 하나 받아서 돈 벌어보기☆";
  const goal3 = "상반기 연구비 공모 떨어졌다면 더 준비해서 다시 도전하기 >.<";
  const goal4 = "외부사업 강사 나가서 생활비 확보하기!!!";
  const goal5 = "이모티콘 출시하기♬";
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ul
        style={{
          listStyle: "None",
          padding: "1.6rem 3.2rem",
          backgroundColor: "#FAD2CA",
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

export default SecondHalfList;
