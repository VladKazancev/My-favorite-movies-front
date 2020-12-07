import tw, { styled } from "twin.macro";

const PageSwitcherContainer = styled.div`
  ${tw`flex items-center`}
  div[name="pageLabel"] {
    ${tw`text-3xl text-orange-400 mx-3`}
  }
  img {
    ${tw`w-5 transform transition-scale duration-300`}
    ${tw`hover:scale-90 focus:outline-none`}
  }
  img[name="left"] {
    ${({ actualPage }) => actualPage === 1 && tw`pointer-events-none`}
  }
  img[name="right"] {
    ${({ isNextPage }) => !isNextPage && tw`pointer-events-none`}
  }
`;

export default PageSwitcherContainer;
