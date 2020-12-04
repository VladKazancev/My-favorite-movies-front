import tw, { styled } from "twin.macro";

const MoviesPanelContainer = styled.div(({ viewMode }) => [
  tw`flex w-full rounded-2xl bg-grayv2-main p-4`,
  viewMode === "list" ? tw`flex-col` : tw`justify-around flex-wrap`,
]);

export default MoviesPanelContainer;
