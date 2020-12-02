import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  margin-right: 0.25rem;
  margin-bottom: ${(props) => (props.viewMode === "list" ? "0.5rem" : "0")};
`;

export default DisplayContainer;
