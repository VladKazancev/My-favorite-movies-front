import styled from "styled-components";

const BlockMovieViewContainer = styled.div`
  width: 16rem;
  border-radius: 0.75rem;
  transition-property: box-shadow, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: ${(props) => (props.isActive ? 1 : 0.45)};
  &:hover {
    box-shadow: ${(props) =>
      props.isActive ? "1px 1px 10px 10px rgba(255,218,146,0.7)" : "none"};
  }
`;

export default BlockMovieViewContainer;
