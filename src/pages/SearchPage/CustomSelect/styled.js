import tw, { styled } from "twin.macro";
import Select from "react-select";

const StyledSelect = styled(Select)`
  & .select__control {
    ${tw`border-2 border-orange-400 bg-yellow-100 w-40 hover:border-orangev2-200`}
  }
  & .select__control--is-focused {
    ${tw`shadow-yearSelect`}
  }
  & .select__value-container {
    ${tw`flex justify-center font-semibold text-lg text-gray-800`}
  }
  & .select__input {
    ${tw`font-bold`}
  }
  & .select__menu {
    ${tw`bg-yellow-100`}
  }
  & .select__option {
    ${tw`text-center font-semibold bg-yellow-100 hover:bg-yellow-200`}
  }
  & .select__option--is-selected {
    ${tw`bg-orange-400 text-gray-800 hover:bg-orange-400`}
  }
`;

export const CustomSelectContainer = styled.div`
  ${tw`flex flex-col items-center`}
  div[name="selectTitle"] {
    ${tw`font-semibold uppercase text-orange-400 text-lg mb-4`}
  }
`;

export default StyledSelect;
