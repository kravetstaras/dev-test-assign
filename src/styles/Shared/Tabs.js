import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const TabItem = styled.div`
  color: ${(props) => (props.$selected ? "#fd5359" : "#9193A9")};
  border-bottom: 2px solid;
  border-color: ${(props) => (props.$selected ? "#fd5359" : "transparent")};
  font-size: 16px;
  padding: 0px 0px 4px;
`;
