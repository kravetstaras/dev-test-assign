import styled from "styled-components";
import { PALETTE } from "./Theme";

export const HeroContainer = styled.div`
  display: flex;
  height: calc(80vh - 50px);
  align-items: center;
  background: ${PALETTE.colors.grey};
  flex-direction: column;
  justify-content: center;
`;

export const HeroImg = styled.img`
  height: 72px;
  width: 180px;
`;
