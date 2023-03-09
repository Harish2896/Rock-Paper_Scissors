import { StyledGameButton } from "../Styles/StyledGameButton";

const GameButton = ({ btnClassNames, extraClassNames }) => {
  return (
    <StyledGameButton>
      <div
        className={
          extraClassNames
            ? "outer-circle " + btnClassNames + extraClassNames
            : "outer-circle " + btnClassNames
        }
      >
        <div className="inner-circle">
          <img
            src={require(`../assets/images/icon-${btnClassNames}.svg`)}
            alt={`${btnClassNames}-button`}
          />
        </div>
      </div>
    </StyledGameButton>
  );
};

export default GameButton;
