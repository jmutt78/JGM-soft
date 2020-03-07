import styled from "styled-components";

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1.5rem 3rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SkillsContainer2 = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  h4 {
    line-height: 1.5;
    font-size: 1.1rem !important;
    color: #1c0947;
    text-align: center;
  }
  svg {
    height: 100px;
    width: auto;
    margin-bottom: 20px;
    filter: invert(6%) sepia(57%) saturate(5533%) hue-rotate(257deg)
      brightness(80%) contrast(103%);
  }

  li {
    font-size: 1.1rem;
    text-align: center;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }

  @media (max-width: 800px) {
    display: block;
    width: 50%;
  }
`;

export const SkillsColumn = styled.div`
  display: block;
  justify-content: center;
  width: 70%;

  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;

  :hover {
    margin-top: -50px;
  }

  @media (max-width: 800px) {
    width: 100%;
    :hover {
      margin: 0;
    }
  }
`;

export const Button = styled.a`
  color: #f97304;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  margin-left: 10px;
`;
