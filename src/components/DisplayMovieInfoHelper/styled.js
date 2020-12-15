import tw, { styled } from "twin.macro";

const DisplayContainer = styled.div(({ isBlockView }) => [
  tw`flex mr-1`,
  !isBlockView && tw`mb-2`,
]);

export default DisplayContainer;
