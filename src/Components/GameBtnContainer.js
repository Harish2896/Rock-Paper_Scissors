import { StyledGameBtnContainer } from "../Styles/StyledGameBtnContainer";
import GameButton from "./GameButton";
import triangle from "../assets/images/bg-triangle.svg";
import { Zoom } from "react-reveal";

const GameBtnContainer = ({ setIsGameOn, setPlayerPick }) => {
  return (
    <StyledGameBtnContainer>
      <Zoom delay={500}>
        <img src={triangle} alt="bg-triangle" className="z-[-1] w-full" />
        <div
          className="absolute top-[-20%] left-[-10%]"
          onClick={() => {
            setIsGameOn(true);
            setPlayerPick("paper");
          }}
        >
          <GameButton btnClassNames={"paper"} />
        </div>
        <div
          className="absolute top-[-20%] right-[-10%]"
          onClick={() => {
            setIsGameOn(true);
            setPlayerPick("scissors");
          }}
        >
          <GameButton btnClassNames={"scissors"} />
        </div>
        <div
          className="absolute left-[25%] bottom-[-10%]"
          onClick={() => {
            setIsGameOn(true);
            setPlayerPick("rock");
          }}
        >
          <GameButton btnClassNames={"rock"} />
        </div>
      </Zoom>
    </StyledGameBtnContainer>
  );
};

export default GameBtnContainer;
