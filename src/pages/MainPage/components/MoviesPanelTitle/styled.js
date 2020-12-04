import styled from "styled-components";

const AddButton = styled.button`
  background-color: #ffda92;
  padding: ${(props) =>
    props.lng === "en" ? "0.3rem 2rem" : "0.3rem 0.75rem"};
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #2d3748;
  &:hover {
    box-shadow: 1px 1px 19px 10px rgba(255, 218, 146, 0.35);
  }
  &:focus {
    outline: none;
  }
`;

export default AddButton;
