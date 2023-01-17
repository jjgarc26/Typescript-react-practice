import React, { useEffect, useState } from "react";
import style from "../Styles/MainGame.module.css";
import setColorPattern from "../functions/setColorPattern";
import ComputersTurn from "../functions/ComputersTurn";

// this will let us know which button will light up
// we need to store that number in a list
// we will iterate over the list an change the color of the
// button depending on the id
// we need user to then click the button

let defaultList: string[];

function MainGame() {
  let [gameStatus, setGameStatus] = useState("play");
  let [computerChoice, setComputerChoice] = useState([""]);
  let [userChoice, setUserChoice] = useState([]);
  let [runNum, setRunNum] = useState(1);
  let [compPick, setCompPick] = useState("");
  let newBtnChoice: string;
  // let compTurn: string;

  useEffect(() => {
    //gameStatus === "play"
    console.log(computerChoice);
  }, [runNum]);
  while (runNum <= 3) {
    // computer's turn
    setCompPick(ComputersTurn(computerChoice));
    console.log(`COMP RESULT: ${compPick}`);
    setComputerChoice((prevArray) => [...prevArray, compPick]);

    //user's turn

    //compare
    setRunNum((runNum += 1));
    // if (userChoice === computerChoice) {
    //   continue;
    // } else {
    //   setGameStatus("stop");
    // }
  }

  return (
    <div>
      <div className={style.blueButton} id="0">
        Blue
      </div>
      <div className={style.redButton} id="1">
        Red
      </div>
      <div className={style.greenButton} id="2">
        Green
      </div>
      <div className={style.yellowButton} id="3">
        Yellow
      </div>
    </div>
  );
}

export default MainGame;