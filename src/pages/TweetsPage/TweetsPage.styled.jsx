import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  flex-grow: 1;
`;

export const PageBtn = styled.button`
  display: block;
  width: 130px;
  height: 40px;
  padding: 5px 15px;
  background-color: #ebd8ff;
  border-radius: 5px;

  font-family: inherit;
  font-weight: 600;
  color: #502f9d;
  cursor: pointer;
  transition-property: scale;
  transition-duration: 100ms;
  :hover {
    scale: 1.1;
  }
`;
