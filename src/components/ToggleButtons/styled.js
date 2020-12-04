import tw, { styled } from "twin.macro";

const ToggleButtonsContainer = styled.div`
  ${tw`flex w-1/3 justify-between`}
  img {
    ${tw`transform transition-transform duration-300 w-30px`}
  }
  img[name="block"] {
    ${tw`ml-2 mr-4`}
    ${({ viewMode }) => viewMode === "list" && tw`scale-82`}
  }
  img[name="list"] {
    ${({ viewMode }) => viewMode === "block" && tw`scale-82`}
  }
`;

export default ToggleButtonsContainer;
