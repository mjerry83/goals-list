import "./App.css";
import FirstHalfList from "./components/firstHalfList";
import SecondHalfList from "./components/SecondHalfList";
import duty from "./assets/duty.png";
import { Component } from "react";

function App() {
  return (
    <div
      style={{
        fontFamily: "fontContents",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto auto 100px auto",
      }}
    >
      <img
        src={duty}
        alt="주어진 사명은 다하였는가 대학원생이여"
        style={{ width: "60%", marginTop: "1.6rem" }}
      />
      <p style={{ color: "#36705D", opacity: "0.8" }}>
        DB연결은 귀찮으니 매번 접속해서 체크하며 성취감or자괴감을 얻도록 하라.
      </p>
      <div
        className="listWrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="halfWrapper" style={{ margin: "1.2rem" }}>
          <h1>♡ 2024년 상반기 목표 ♡</h1>
          <p style={{ fontSize: "1.2rem" }}>속이 꽉 찬 박사과정생이 되소서</p>
          <FirstHalfList />
        </div>
        <div className="halfWrapper" style={{ margin: "1.2rem" }}>
          <h1>♡ 2024년 하반기 목표 ♡</h1>
          <p style={{ fontSize: "1.2rem" }}>
            돈을 많이(?) 버는 박사과정생이 되소서
          </p>
          <SecondHalfList />
        </div>
      </div>
    </div>
  );
}

export default App;
