// Home Button
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%);

  background-color: #fcf6f4;
  padding: 0.8rem;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.body} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #131313;
  cursor: pointer;

  &:hover {
    background-color: #131313;
    color: #fff;
  }
  & > *:first-child {
    color: inherit;
  }
  .h1 {
    color: #fff;
  }
  .h2 {
    color: #131313;
  }
`;

const HomeBtn = () => {
  return (
    <Power>
      <NavLink to="/">
        <h2>
          <span className="h1">H O </span> <span className="h2">M E</span>
        </h2>
      </NavLink>
    </Power>
  );
};

export default HomeBtn;
