import MContainer from "../../../Pagination/StyledComponents/components";
import styled from "styled-components";
import { Container } from "../../../Pagination/StyledComponents/components";

export const MainContainer = styled(MContainer)`
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(253 224 71 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(41 37 36 / var(--tw-bg-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(41 37 36 / var(--tw-bg-opacity));
  border-radius: 1.5rem;
  border-width: 2px;
  color: white;
  padding: 0.5rem;
  --tw-shadow-color: #000;
  --tw-shadow: var(--tw-shadow-colored);
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export const Span = styled.span`
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
  font-style: italic;
`;

export const ButtonContainer = styled(Container)`
  display: flex;
`;

export const Button = styled.button`
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
  font-weight: 600;
  border-radius: 0.5rem;
  width: 7rem;
  padding: 0.25rem;
  margin: 0.5rem;
  color: black;
`;

export const MiniContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
