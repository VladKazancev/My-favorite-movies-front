import tw, { styled } from "twin.macro";

const DisplayContainer = styled.div(({ viewMode }) => [
  tw`flex mr-1`,
  viewMode === "list" && tw`mb-2`,
]);

export default DisplayContainer;
