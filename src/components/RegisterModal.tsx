import styled from 'styled-components';
import { useState } from 'react';
import db, { doesUsernameExists, auth } from '../firebase';

const RegisterModal = ({ closeModal }: any): any => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExists(userName);
    if (usernameExists) {
      try {
        const createdUser = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await db.collection('users').add({
          userId: createdUser.user?.uid,
          displayname: displayName,
          username: userName,
        });
        setError('');
        setEmail('');
        setDisplayName('');
        setPassword('');
        setUserName('');
        setMessage('Account Created');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <Container>
      <Modal>
        <Content>
          <Close onClick={() => closeModal(false)}>x</Close>
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <p>Register to Twitter</p>
          <form onSubmit={handleRegister} method="POST">
            <input
              type="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e: any) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Display name"
              value={displayName}
              onChange={(e: any) => setDisplayName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <button
              disabled={
                displayName.length < 1 || userName.length < 1 ? true : false
              }
            >
              Register
            </button>
          </form>
          <span>{error ? error : message}</span>
        </Content>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
`;
const Modal = styled.div`
  width: 450px;
  height: 500px;
  background: black;
  z-index: 1;
  margin-bottom: 10vh;
  border-radius: 20px;
`;
const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: -20px;
  top: -15px;
  font-size: 22px;
`;

const Content = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  div {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    img {
      width: 40px;
      opacity: 0.9;
    }
  }
  p {
    margin-top: 25px;
    font-size: 26px;
    font-weight: 600;
  }

  input {
    color: inherit;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    height: 40px;
    margin-top: 20px;
    outline: none;
    border-radius: 5px;
    font-size: 20px;
    width: 100%;
    font-family: inherit;
    &:focus {
      border-radius: 5px;
      border: solid 1px #1da1f2;
    }
  }

  button {
    background: #1da1f2;
    border: none;
    border-radius: 50px;
    width: 100%;
    height: 50px;
    color: white;
    font-weight: 700;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: #0294ed;
    }
    &:disabled {
      background: gray;
    }
  }
  span {
    text-align: center;
    margin-top: 5px;
    font-size: 17px;
  }
`;

export default RegisterModal;
