import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Login = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const [activeSignIn, setActiveSignIn] = useState(false);
  const [activeRegister, setActiveRegister] = useState(false);

  return (
    <>
      {user.userEmail && <Redirect to="/home" />}
      <Container>
        {activeSignIn ? <LoginModal closeModal={setActiveSignIn} /> : null}
        {activeRegister ? (
          <RegisterModal closeModal={setActiveRegister} />
        ) : null}
        <LeftArea>
          <img src="/images/logo.svg" alt="logo"></img>
        </LeftArea>
        <RightArea>
          <img src="/images/logo.svg" alt="logo-small"></img>
          <Motto>Simple Twitter clone build using React and TypeScript</Motto>
          <JoinText>Join Twitter today.</JoinText>
          <RegisterButton onClick={() => setActiveRegister(true)}>
            Sign up
          </RegisterButton>
          <LoginButton onClick={() => setActiveSignIn(true)}>
            Log in
          </LoginButton>
        </RightArea>
      </Container>
      <Footer>
        <p>About</p> <p>Help Center</p> <p>Terms of Service</p>
        <p>Privacy Policy</p> <p>Cookie Policy</p> <p>Ads info</p>
        <p>Blog</p> <p>Status</p> <p>Careers</p> <p>Brand Resources</p>
        <p>Advertising</p> <p>Marketing</p> <p>Twitter for Business</p>
        <p>Developers</p> <p>Directory</p> <p>Settings</p>
        <p>© 2021 Twitter, Inc.</p>
      </Footer>
    </>
  );
};

const Container = styled.div`
  height: 95vh;
  display: grid;
  grid-template-columns: 6fr 5fr;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png');
  img {
    width: 378px;
  }
  svg {
    color: white;
  }
`;

const RightArea = styled.div`
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

const Motto = styled.p`
  font-size: 60px;
  letter-spacing: -1.2px;
  line-height: 84px;
`;

const JoinText = styled.p`
  font-size: 30px;
`;

const RegisterButton = styled.button`
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
`;

const LoginButton = styled.button`
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
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
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

export default Login;
