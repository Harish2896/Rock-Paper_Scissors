import tw, { styled } from "twin.macro";

export const StyledGameButton = styled.div`
  .outer-circle {
    ${tw`relative w-[clamp(8.5rem, 7.167rem + 6.67vw, 11rem)] h-[clamp(8.5rem, 7.167rem + 6.67vw, 11rem)] border-black border-[1px] rounded-full shadow-[0_-6px_0_0_hsl(0, 0%, 0%,0.3)_inset] cursor-pointer ease-in-out transition-all [transition-duration: 0.2s] translate-y-0.5 [transform: scale(1.04)]`}

    &.rock {
      ${tw`bg-gradient-to-b from-[hsl(349, 71%, 52%)] to-[hsl(349, 70%, 56%)]`}
    }

    &.paper {
      ${tw`bg-gradient-to-b from-[hsl(230, 89%, 62%)] to-[hsl(230, 89%, 65%)]`}
    }

    &.scissors {
      ${tw`bg-gradient-to-b from-[hsl(39, 89%, 49%)] to-[hsl(40, 84%, 53%)]`}
    }
    &:active {
      ${tw`shadow-none translate-y-0 [transform:scale(1)]`}
    }

    .inner-circle {
      ${tw`relative flex justify-center top-[11%] left-[12.5%] w-[75%] h-[75%] border-solid border-0 rounded-full bg-white shadow-[0_6px_0px_0_lightgray_inset]`}

      img {
        ${tw`my-auto w-[clamp(3rem, 2.703rem + 1.44vw, 3.5rem)] h-[clamp(3.2rem, 2.843rem + 1.73vw, 4rem)]`}
      }
    }

    &.big {
      ${tw`w-[clamp(9rem, 6.577rem + 10.77vw, 14rem)] h-[clamp(9rem, 6.577rem + 10.77vw, 14rem)] cursor-default transition-none translate-y-0`}
      &:active {
        ${tw`shadow-[0_-6px_0_0_hsl(0, 0%, 0%,0.3)_inset]`}
      }
      .inner-circle {
        img {
          ${tw`my-auto w-[clamp(3rem, 2.703rem + 1.44vw, 5.5rem)] h-[clamp(3.2rem, 2.843rem + 1.73vw, 6rem)]`}
        }
      }
    }
  }
`;
