import styled from "styled-components";
import { PALETTE } from "../Theme";

export const CardContainer = styled.div`
  padding: 20px;
  background-color: ${PALETTE.colors.white};
  border-radius: 2px;
  text-align: center;
`;

export const CardsContainer = styled.div`
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const CardIcon = styled.img`
  width: 66px;
  height: 50px;
`;

export const Line = styled.div`
  width: 100%;
  height: 6px;
  background: ${PALETTE.colors.line};
  border-radius: 3px;
`;

export const Indicator = styled.div`
  width: ${(props) => props.value * 100}%;
  height: 6px;
  background: ${PALETTE.colors.red};
  border-radius: 3px;
`;

export const AnalyticsLine = styled.div``;

export const AnalyticsKeyValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -5px 0 10px;
`;

export const NiceCardBar = styled.div`
  background: ${PALETTE.colors.bar};
  position: relative;
  padding: 19px 25px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 5px;
  & p {
    margin: 0;
    text-align: initial;
  }
`;

export const GoodCardBar = styled.div`
  background: ${PALETTE.colors.bar};
  position: relative;
  padding: 16px 17px;
  display: flex;
  gap: 5px;
  & p {
    margin: 0;
  }
`;

export const NiceCardBarBorder = styled.div`
  background: ${PALETTE.colors.blue};
  position: absolute;
  height: 100%;
  width: 5px;
  border-radius: 3px;
  top: 0;
  left: 0;
`;

export const GoodBarTitle = styled.div`
  padding: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & p {
    text-align: start;
  }
`;
