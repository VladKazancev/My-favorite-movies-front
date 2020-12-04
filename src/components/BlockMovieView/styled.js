import tw, { styled } from "twin.macro";

const BlockMovieViewContainer = styled.div(({ isActive }) => [
  tw`flex flex-col justify-end w-64 rounded-xl`,
  tw`transition duration-300 relative`,
  isActive ? tw`hover:shadow-movie` : tw`opacity-45`,
]);

export default BlockMovieViewContainer;
