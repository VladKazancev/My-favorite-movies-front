import styled from "styled-components";

const ListMovieViewContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #292929;
  border-radius: 0.75rem;
  margin: 0.5rem 0.5rem 0;
  padding: 0.5rem;
  transition-property: box-shadow, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
  opacity: ${(props) => (props.isActive ? 1 : 0.45)};
  &:hover {
    box-shadow: ${(props) =>
      props.isActive ? "1px 1px 10px 10px rgba(255,218,146,0.7)" : "none"};
  }
  img[name="ageLimit"] {
    position: absolute;
    margin: 0.5rem;
    width: 50px;
    display: ${(props) => (props.adultOnly ? "inline" : "none")};
  }
`;

export default ListMovieViewContainer;
