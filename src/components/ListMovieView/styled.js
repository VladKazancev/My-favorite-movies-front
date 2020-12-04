import tw, { styled } from "twin.macro";

const ListMovieViewContainer = styled.div`
  ${tw`flex flex-row items-center w-full rounded-xl`}
  ${tw`bg-blackv2-main mt-2 mx-2 p-2 transition duration-300`}
  ${({ isActive }) =>
    isActive ? tw`hover:shadow-movie` : tw`opacity-45 pointer-events-none`}
  img[name="ageLimit"] {
    ${tw`absolute m-1 w-50px`}
    ${({ adultOnly }) => !adultOnly && tw`hidden`}
  }
`;

export default ListMovieViewContainer;
