import React from 'react';
import { auth, provider } from '../firebase';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setActiveUser } from '../app/userSlice';
import styled from 'styled-components';
import { Redirect } from 'react-router';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      dispatch(
        setActiveUser({
          userName: result.user?.displayName,
          userEmail: result.user?.email,
          photoURL: result.user?.photoURL,
          userId: result.user?.uid,
        })
      );
    });
  };

  return (
    <>
      {user.userName && <Redirect to="/home" />}
      <Container>
        <LeftArea>
          <img src="/images/logo.svg" alt="logo"></img>
        </LeftArea>
        <RightArea>
          <img src="/images/logo.svg" alt="logo-small"></img>
          <Motto>Simple Twitter clone build using React and TypeScript</Motto>
          <JoinText>Join Twitter today.</JoinText>
          <RegisterButton>Sign up</RegisterButton>
          <LoginButton onClick={() => handleSignIn()}>
            <img src="/images/google.svg" alt="google" />
            Log in
          </LoginButton>
        </RightArea>
      </Container>
      <Footer>Footer</Footer>
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
  background: black;
  height: 5vh;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

export default Login;
