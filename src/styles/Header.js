import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 30px;
`;

export const BreadCrumbs = styled.button`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 4px;
  & label {
    color: #9193a9;
    cursor: pointer;
    height: 14px;
  }
`;

export const HeaderLogo = styled.img`
  width: 75px;
  height: 30px;
`;
