import tw, { styled } from "twin.macro";

export const StyledHeader = styled.div`
  ${tw`w-[90%] mx-auto mb-24 p-4 flex justify-between place-content-center border-outline border-4 rounded-md md:mb-36`}

  .game-name {
    ${tw`pt-4 text-white text-[clamp(1.5rem, 1.277rem + 1.08vw, 2.25rem)] uppercase tracking-wider leading-[clamp(1.25rem, 1.101rem + 0.72vw, 1.75rem)]`}
    span {
      ${tw`block p-0 m-0`}
    }
  }
  .score-container {
    ${tw`px-7 py-2 text-center border-white border-[1px] rounded-md  bg-white `}
    .score-heading {
      ${tw`text-[clamp(0.75rem, 0.676rem + 0.36vw, 1rem)] text-navy font-bold tracking-widest`}
    }
    .score {
      ${tw`text-veryDarkBlue text-[clamp(3rem, 2.703rem + 1.44vw, 4rem)] font-bold leading-none`}
    }
  }
`;
