import tw, { styled } from "twin.macro";

const FiltersContainer = styled.div`
  ${tw`flex flex-col items-center w-9/12 mt-8`}
  div[name="filtersTitle"] {
    ${tw`font-semibold uppercase text-orange-400 text-xl mb-5`}
  }
  div[name="filtersGenres"] {
    ${tw`flex flex-wrap justify-center mb-5`}
  }
  div[name="filtersMain"] {
    ${tw`flex w-600px justify-between items-center`}
  }
`;

export default FiltersContainer;
