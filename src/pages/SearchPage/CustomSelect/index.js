import React from "react";
import StyledSelect, { CustomSelectContainer } from "./styled";
import { makeYearsList } from "utils";
import { useTranslation } from "react-i18next";

export default function CustomSelect(props) {
  const options = makeYearsList();
  const { t } = useTranslation("searchPage");
  return (
    <CustomSelectContainer>
      <div name="selectTitle">{t("releaseYear")}</div>
      <StyledSelect
        className="select-container"
        classNamePrefix="select"
        options={options}
        onChange={(e) => props.onChangeSelect(e.value)}
        defaultValue={{ value: 2020, label: "2020" }}
      />
    </CustomSelectContainer>
  );
}
