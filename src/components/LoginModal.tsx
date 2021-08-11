import styled from 'styled-components';
import { useState } from 'react';
import { auth } from '../firebase';
import { setActiveUser } from '../app/userSlice';
import { useAppDispatch } from '../app/hooks';
const LoginModal = ({ closeModal }: any): any => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        dispatch(
          setActiveUser({
            userEmail: result.user?.email,
            userId: result.user?.uid,
          })
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <Container>
      <Modal>
        <Content>
          <Close onClick={() => closeModal(false)}>x</Close>
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <p>Log In to Twitter</p>
          <form method="POST" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Log In</button>
          </form>
          {error}
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
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: #0294ed;
    }
  }
`;

export default LoginModal;
