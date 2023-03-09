import { StyledHeader } from "../Styles/StyledHeader";

const Header = ({ score }) => {
  return (
    <StyledHeader>
      <div className="game-name">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-container">
        <p className="score-heading">SCORE</p>
        <h3 className="score">{score}</h3>
      </div>
    </StyledHeader>
  );
};

export default Header;
