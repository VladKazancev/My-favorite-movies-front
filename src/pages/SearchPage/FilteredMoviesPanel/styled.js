import tw, { styled } from "twin.macro";

const FilteredMoviesPanelContainer = styled.div`
  ${tw`flex flex-col items-center my-16 w-9/12`}
  div[name="searchPanel"] {
    ${tw`flex w-full rounded-2xl bg-grayv2-main p-4 justify-around flex-wrap`}
    ${({ viewMode }) =>
      viewMode === "list" ? tw`flex-col` : tw`justify-around flex-wrap`}
  }
  div[name="searchTitle"] {
    ${tw`flex justify-around self-end w-1/4 mb-5 mr-20`}
  }
  div[name="searchEmptyLabel"] {
    ${tw`text-2xl text-center font-semibold text-gray-800`}
    ${({ length }) => length && tw`hidden`}
  }
`;

export default FilteredMoviesPanelContainer;
