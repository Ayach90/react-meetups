import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0px;
  background-color: #77002e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 10%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  &.down {
    top: -5rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fcb8d2;
  }
  a:hover,
  a:active,
  a.active {
    color: #fff;
  }
  li {
    margin-left: 3rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }
`;
