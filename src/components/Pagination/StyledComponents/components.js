import styled from "styled-components";
import { device } from "../../UI/breakpoints";

export const Button = styled.button`
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
  width: 2.5rem;
  border-radius: 0.375rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  height: 2.5rem;
`;

export const Container = styled.div`
  align-self: ${(props) => (props.align ? "center" : "auto")};
  margin-bottom: ${(props) => (props.mb ? "2.5rem" : "0")};
  margin-top: ${(props) => (props.mt ? "1rem" : "0")};
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  row-gap: 1.5rem;
  justify-content: space-evenly;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  margin-bottom: 1rem;

  @media ${device.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${device.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media ${device.xxl} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const Paragraph = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
`;

export const GridItem = styled.div`
  grid-column: 1 / -1;
  margin-top: 6rem;
  margin-left: 6rem;
`;
const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default MainContainer;
