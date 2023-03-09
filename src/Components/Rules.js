import { useState } from "react";
import imageRules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";
import { StyledRules } from "../Styles/StyledRules";

const Rules = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const onClickHandler = () => {
    setIsRulesOpen(!isRulesOpen);
  };
  return (
    <StyledRules>
      <button className="rules-button" onClick={onClickHandler}>
        Rules
      </button>
      <section
        className={
          isRulesOpen
            ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-40"
            : "hidden"
        }
      >
        <article className="rules-container">
          <h3 className="rules-heading">RULES</h3>
          <img className="rules-image" src={imageRules} alt="rules" />
          <img
            className="rules-closeButton"
            src={close}
            alt="close"
            onClick={onClickHandler}
          />
        </article>
      </section>
    </StyledRules>
  );
};

export default Rules;
