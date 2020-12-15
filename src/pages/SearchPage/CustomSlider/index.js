import React, { useState } from "react";
import StyledSlider, { CustomSliderContainer } from "./styled";
import { StylesProvider } from "@bit/mui-org.material-ui.styles";
import { useTranslation } from "react-i18next";

export default function CustomSlider(props) {
  const [sliderLabelValue, setLabelValue] = useState(5);
  const { t } = useTranslation("searchPage");
  return (
    <CustomSliderContainer>
      <div name="sliderTitle">{t("rating")}</div>
      <div name="sliderMain">
        <StylesProvider injectFirst>
          <StyledSlider
            step={0.1}
            max={10}
            defaultValue={5}
            onChangeCommitted={(e, newValue) => props.onChangeRating(newValue)}
            onChange={(e, newValue) => setLabelValue(newValue)}
          />
        </StylesProvider>
        <div name="sliderLabel">{sliderLabelValue}</div>
      </div>
    </CustomSliderContainer>
  );
}
