import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { Redirect } from 'react-router';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import {
  Container,
  LeftArea,
  RightArea,
  Motto,
  JoinText,
  RegisterButton,
  LoginButton,
  Footer,
} from '../styles/loginStyles';

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

export default Login;
