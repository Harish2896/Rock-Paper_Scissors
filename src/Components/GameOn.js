import { useEffect, useState } from "react";
import GameButton from "./GameButton";
import { StyledGameOn } from "../Styles/StyledGameOn";
import { Fade, Bounce } from "react-reveal";
import Tada from "react-reveal/Tada";

const GameOn = ({ playerPick, setIsGameOn, setScore, score }) => {
  const [cpuPick, setCPuPick] = useState("");
  const [winner, setWinner] = useState("");

  const setCpuPickFunc = (cpuPick) => {
    if (cpuPick === "1" && playerPick !== "paper") {
      return "paper";
    } else if (cpuPick === "2" && playerPick !== "scissors") {
      return "scissors";
    } else {
      return "rock";
    }
  };

  const setWinnerFunc = (playerPick) => {
    if (playerPick === "rock" && cpuPick === "scissors") {
      return "You Win";
    } else if (playerPick === "paper" && cpuPick === "rock") {
      return "You Win";
    } else if (playerPick === "scissors" && cpuPick === "paper") {
      return "You Win";
    } else if (playerPick) {
      return "You Lose";
    }
  };

  useEffect(() => {
    //setting Cpu Pick
    !cpuPick &&
      setCPuPick(
        setCpuPickFunc((Math.floor(Math.random() * 2) + 1).toString())
      );
    //setting Winner
    cpuPick && setWinner(setWinnerFunc(playerPick));
    //setting Score
    winner === "You Win" && setScore(score + 1);
    winner === "You Lose" && score !== 0 && setScore(score - 1);
  }, [setCPuPick, cpuPick, playerPick, setScore, winner, setWinner]);

  const restartFunc = () => {
    setIsGameOn(false);
  };
  return (
    <StyledGameOn>
      <Fade left>
        <article className="player">
          <div className="player-button">
            <GameButton btnClassNames={playerPick} extraClassNames=" big" />
            <div
              className={
                winner === "You Win"
                  ? "player-button-animation-outer"
                  : "hidden"
              }
            >
              <div className="player-button-animation-inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <h2 className="player-heading">You Picked</h2>
        </article>
      </Fade>

      {cpuPick && (
        <Fade right>
          <article className="cpu">
            <div className="cpu-button">
              <GameButton btnClassNames={cpuPick} extraClassNames=" big" />
              <div
                className={
                  winner === "You Lose"
                    ? "cpu-button-animation-outer"
                    : "hidden"
                }
              >
                <div className="cpu-button-animation-inner relative flex w-48 h-48 justify-center items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <h2 className="cpu-heading">House Pick</h2>
          </article>
        </Fade>
      )}
      {winner && (
        <Bounce bottom delay={500}>
          <article className="result">
            <Tada delay={1500}>
              <h2 className="result-heading">{winner}</h2>
            </Tada>
            <button className="play-again-button" onClick={restartFunc}>
              play again
            </button>
          </article>
        </Bounce>
      )}
    </StyledGameOn>
  );
};

export default GameOn;
