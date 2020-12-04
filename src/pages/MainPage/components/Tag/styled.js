import styled from "styled-components";

const StyledTag = styled.button`
  border-width: 2px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  border-radius: 9999px;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: ${(props) => (props.isActive ? "#F6AD55" : "inherit")};
  border-color: ${(props) => (props.isActive ? "#F6AD55" : "#FC9F38")};
  color: ${(props) => (props.isActive ? "#2D3748" : "#FF9A2B")};
  &:hover {
    box-shadow: 0px 0px 0px 4px rgba(217, 217, 217, 0.3);
  }
  &:focus {
    outline: none;
  }
`;

export default StyledTag;
