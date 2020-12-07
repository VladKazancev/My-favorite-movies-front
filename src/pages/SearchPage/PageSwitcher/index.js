import React from "react";
import { NEXT_PAGE, PREVIOUS_PAGE } from "./consts";
import PageSwitcherContainer from "./styled";

export default function PageSwitcher(props) {
  const actualPage = props.actualPage;
  return (
    <PageSwitcherContainer
      isNextPage={props.isNextPage}
      actualPage={actualPage}
    >
      <img
        onClick={(e) => props.setPage(actualPage - 1)}
        name="left"
        src={PREVIOUS_PAGE}
        alt={"previousPage"}
      />
      <div name="pageLabel">{actualPage}</div>
      <img
        onClick={(e) => props.setPage(actualPage + 1)}
        name="right"
        src={NEXT_PAGE}
        alt={"nextPage"}
      />
    </PageSwitcherContainer>
  );
}
