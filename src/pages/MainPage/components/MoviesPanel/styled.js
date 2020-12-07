import tw, { styled } from "twin.macro";

const MoviesPanelContainer = styled.div`
  ${tw`flex w-full rounded-2xl bg-grayv2-main p-4`}
  ${({ viewMode }) =>
    viewMode === "list" ? tw`flex-col` : tw`justify-around flex-wrap`}
  div[name="mainEmptyLabel"] {
    ${tw`text-2xl text-center font-semibold text-gray-800`}
    ${({ length }) => length && tw`hidden`}
  }
`;

export default MoviesPanelContainer;
