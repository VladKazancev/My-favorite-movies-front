import styled from "styled-components";

const MoviesPanelContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1rem;
  background-color: #c4c4c4;
  padding: 1rem;
  flex-direction: ${(props) => (props.viewMode === "list" ? "column" : "row")};
  justify-content: ${(props) =>
    props.viewMode === "block" ? "space-around" : "flex-start"};
  flex-wrap: ${(props) => (props.viewMode === "block" ? "wrap" : "nowrap")};
`;

export default MoviesPanelContainer;
