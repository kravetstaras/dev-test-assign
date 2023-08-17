import styled from "styled-components";
import { PALETTE } from "../Theme";

export const Button = styled.button`
  background-color: ${PALETTE.colors.button.primary};
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0 15px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  &:hover {
    background-color: ${PALETTE.colors.button.hovered};
  }
`;
