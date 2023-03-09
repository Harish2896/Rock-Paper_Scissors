import { StyledApp } from "./Styles/StyledApp";
import Header from "./Components/Header";
import GameBtnContainer from "./Components/GameBtnContainer";
import Rules from "./Components/Rules";
import { useState } from "react";
import GameOn from "./Components/GameOn";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [playerPick, setPlayerPick] = useState("");
  var [score, setScore] = useState(0);
  return (
    <StyledApp>
      <div className="px-[0.18rem] sm:px-[15%]">
        <Header score={score} />
      </div>
      {!isGameOn && (
        <GameBtnContainer
          setIsGameOn={setIsGameOn}
          setPlayerPick={setPlayerPick}
        />
      )}
      {isGameOn && (
        <GameOn
          playerPick={playerPick}
          setIsGameOn={setIsGameOn}
          setScore={setScore}
          score={score}
        />
      )}
      <Rules />
    </StyledApp>
  );
}

export default App;
