import styled from "styled-components";
import { PALETTE } from "../Theme";

export const SecondaryText = styled.p`
  color: ${PALETTE.colors.secondary};
  max-width: ${(props) => (props.$card ? "403px" : "458px")};
  text-align: center;
  margin: 0 auto ${(props) => props.marginBottom};
  font-size: 14px;
`;

export const Title = styled.p`
  font-size: ${(props) => props.size};
  color: ${PALETTE.colors.primary};
  margin: ${(props) => (props.size === "20px" ? "54px 0 10px" : "20px 0")};
  text-transform: ${(props) => props.$uppercase && "uppercase"};
  &.disabled {
    color: ${PALETTE.colors.disabled};
  }
  &.secondary {
    color: ${PALETTE.colors.secondary};
  }
  &.blue {
    color: ${PALETTE.colors.blue};
  }
  &.red {
    color: ${PALETTE.colors.red};
  }
`;
