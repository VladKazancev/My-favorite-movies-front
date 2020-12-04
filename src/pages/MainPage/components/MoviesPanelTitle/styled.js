import tw, { styled } from "twin.macro";

const AddButton = styled.button(({ lng }) => [
  tw`bg-beigev2 py-5px text-lg rounded-lg text-gray-800 font-semibold`,
  tw`hover:shadow-add focus:outline-none`,
  lng === "en" ? tw`px-8` : tw`px-3`,
]);

export default AddButton;
