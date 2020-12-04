import tw, { styled } from "twin.macro";

const StyledTag = styled.button(({ isActive }) => [
  tw`border-2 text-xl font-semibold px-3 py-1 m-1 rounded-full`,
  tw`transition-colors duration-500 hover:shadow-ring focus:outline-none`,
  isActive
    ? tw`bg-orange-400 border-orange-400 text-gray-800`
    : tw`text-orangev2-200 border-orangev2-100`,
]);

export default StyledTag;
