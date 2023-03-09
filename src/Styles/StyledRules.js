import tw, { styled } from "twin.macro";

export const StyledRules = styled.div`
  .rules-button {
    ${tw`block mt-24 mx-auto px-9 py-2 uppercase text-white text-lg tracking-[0.3em] border-white border-2 rounded-xl lg:ml-[70%]`}
  }
  .rules-container {
    ${tw`pt-24 w-full h-full bg-white sm:relative sm:pt-[clamp(0.75rem, -1.145rem + 4.74vw, 3rem)] sm:w-[clamp(25rem, 14.474rem + 26.32vw, 28rem)] sm:h-[clamp(25rem, 14.474rem + 26.32vw, 28rem)] sm:rounded-xl sm:mx-auto sm:my-[100px] sm:pt-6`}
    .rules-heading {
      ${tw`text-4xl text-veryDarkBlue text-center font-bold sm:text-left sm:pl-8`}
    }
    .rules-image {
      ${tw`w-[clamp(18.938rem, 13.832rem + 12.76vw, 20rem)] h-[clamp(19.875rem, 15.559rem + 10.79vw, 20rem)] mx-auto pt-12`}
    }
    .rules-closeButton {
      ${tw`mx-auto pt-12 cursor-pointer sm:absolute sm:p-0 sm:top-9 sm:right-8`}
    }
  }
`;
