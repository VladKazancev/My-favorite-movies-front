import tw, { styled } from "twin.macro";
import Slider from "@bit/mui-org.material-ui.slider";

const StyledSlider = styled(Slider)`
  ${tw`text-beigev2 h-2 w-250px`}
  & .MuiSlider-thumb {
    ${tw`bg-yellow-300 w-6 h-6 border-3 border-orangev2-200 -mt-2 -ml-3`}
    ${tw`hover:shadow-none focus:shadow-none active:shadow-none`}
  }
  & .MuiSlider-track,
  .MuiSlider-rail {
    ${tw`h-2 rounded`}
  }
`;

export const CustomSliderContainer = styled.div`
  ${tw`flex flex-col items-center`}
  div[name="sliderTitle"] {
    ${tw`font-semibold uppercase text-orange-400 text-lg mb-1`}
  }
  div[name="sliderMain"] {
    ${tw`flex items-center`}
  }
  div[name="sliderLabel"] {
    ${tw`flex items-center justify-center border-4 border-orange-400`}
    ${tw`font-semibold text-gray-800 text-lg ml-6 rounded-full`}
    ${tw`bg-beigev2 h-12 w-12`}
  }
`;

export default StyledSlider;
