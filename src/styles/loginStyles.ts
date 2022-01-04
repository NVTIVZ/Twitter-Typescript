import styled from 'styled-components';

export const Container = styled.div`
  height: 95vh;
  display: grid;
  grid-template-columns: 6fr 5fr;
  @media (max-width: 468px) {
    height: auto;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/loginbg.png');
  img {
    width: 378px;
  }
  svg {
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 35px;
  padding-right: 85px;
  p {
    margin-top: 30px;
    font-weight: 700;
  }
  img {
    width: 48px;
    margin-bottom: 30px;
    opacity: 0.8;
  }
`;

export const Motto = styled.p`
  font-size: 60px;
  letter-spacing: -1.2px;
  line-height: 84px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const JoinText = styled.p`
  font-size: 30px;
`;

export const RegisterButton = styled.button`
  background: #1da1f2;
  border: none;
  border-radius: 50px;
  width: 375px;
  height: 50px;
  color: white;
  font-weight: 700;
  margin-top: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background: #0294ed;
  }
  @media (max-width: 768px) {
    width: 275px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: solid #1da1f2 1px;
  border-radius: 50px;
  width: 375px;
  height: 50px;
  color: #1da1f2;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;

  img {
    width: 24px;
    margin-bottom: 0;
    margin-right: 5px;
  }
  &:hover {
    background: rgba(2, 148, 237, 0.1);
  }
  @media (max-width: 768px) {
    width: 275px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: black;
  margin-top: auto;
  padding-left: 5px;
  padding-right: 5px;
  height: 5vh;
  color: rgba(255, 255, 255, 0.4);
  font-size: 11.5px;
  p {
    margin-left: 6px;
    margin-right: 6px;
  }
  p:not(:last-child) {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
