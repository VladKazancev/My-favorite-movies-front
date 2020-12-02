import styled from "styled-components";

const ToggleButtonsContainer = styled.div`
  display: flex;
  width: 33.33333%;
  justify-content: space-between;
  img {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    width: 30px;
  }
  img[name="block"] {
    margin-left: 0.5rem;
    margin-right: 1rem;
    transform: ${(props) =>
      props.viewMode === "list" ? "scale(0.82)" : "none"};
  }
  img[name="list"] {
    transform: ${(props) =>
      props.viewMode === "block" ? "scale(0.82)" : "none"};
  }
`;

export default ToggleButtonsContainer;
