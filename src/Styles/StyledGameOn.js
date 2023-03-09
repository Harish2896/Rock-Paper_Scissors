import tw, { styled } from "twin.macro";

export const StyledGameOn = styled.div`
  ${tw`relative text-center md:flex md:justify-center md:gap-16`}

  .player {
    ${tw`inline-block p-4 md:p-0 md:order-1`}
    .player-button {
      ${tw`relative`}
      .player-button-animation-outer {
        ${tw`absolute top-2/4  left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[-100]`}
        .player-button-animation-inner {
          ${tw`relative flex w-48 h-48 justify-center items-center`}
          span:nth-child(1) {
            ${tw`absolute w-[clamp(6rem, 4.815rem + 5.93vw, 10rem)] h-[clamp(6rem, 4.815rem + 5.93vw, 10rem)] bg-white rounded-full animate-ping`}
          }
          span:nth-child(2) {
            ${tw`absolute w-[clamp(8rem, 6.815rem + 5.93vw, 12rem)] h-[clamp(8rem, 6.815rem + 5.93vw, 12rem)] bg-white rounded-full animate-ping`}
          }
          span:nth-child(3) {
            ${tw`absolute w-[clamp(10rem, 8.815rem + 5.93vw, 14rem)] h-[clamp(10rem, 8.815rem + 5.93vw, 14rem)] bg-white rounded-full animate-ping`}
          }
        }
      }
    }
    .player-heading {
      ${tw`mt-5 text-2xl text-white  uppercase tracking-[0.15rem]`}
    }
  }

  .cpu {
    ${tw`inline-block p-4 md:p-0 md:order-3`}
    .cpu-button {
      ${tw`relative`}
      .cpu-button-animation-outer {
        ${tw`absolute top-2/4  left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[-100]`}
        .cpu-button-animation-inner {
          ${tw`relative flex w-48 h-48 justify-center items-center`}
          span:nth-child(1) {
            ${tw`absolute w-[clamp(6rem, 4.815rem + 5.93vw, 10rem)] h-[clamp(6rem, 4.815rem + 5.93vw, 10rem)] bg-white rounded-full animate-ping`}
          }
          span:nth-child(2) {
            ${tw`absolute w-[clamp(8rem, 6.815rem + 5.93vw, 12rem)] h-[clamp(8rem, 6.815rem + 5.93vw, 12rem)] bg-white rounded-full animate-ping`}
          }
          span:nth-child(3) {
            ${tw`absolute w-[clamp(10rem, 8.815rem + 5.93vw, 14rem)] h-[clamp(10rem, 8.815rem + 5.93vw, 14rem)] bg-white rounded-full animate-ping`}
          }
        }
      }
    }
    .cpu-heading {
      ${tw`mt-5 text-2xl text-white  uppercase tracking-[0.15rem]`}
    }
  }

  .result {
    ${tw`mt-12 md:mt-0 md:flex md:flex-col items-center justify-center md:order-2`}
    .result-heading {
      ${tw`mb-10 uppercase text-5xl text-white font-bold tracking-wider leading-10 md:text-[clamp(3.75rem, 3.188rem + 1.5vw, 4rem)]`}
    }
    .play-again-button {
      ${tw`px-16 py-4 border-white border-[1px] rounded-lg uppercase text-xl text-outline bg-white tracking-widest transition-all hover:text-[red] md:text-2xl`}
    }
  }
`;
