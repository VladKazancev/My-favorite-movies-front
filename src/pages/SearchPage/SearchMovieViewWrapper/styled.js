import tw, { styled } from "twin.macro";

const AddFilmButton = styled.button(({ lng, disabled, viewMode }) => [
  tw`bg-yellow-100 border-orange-400 w-1/2 py-5px text-lg rounded-lg`,
  tw`text-gray-800 font-semibold transition duration-300`,
  tw`hover:shadow-add hover:bg-yellow-200 focus:outline-none mt-3 mb-2`,
  lng === "en" ? tw`px-8` : tw`px-3`,
  disabled && tw`opacity-45 pointer-events-none`,
  viewMode === "list" && tw`ml-24 xl:ml-56`,
]);

export default AddFilmButton;
