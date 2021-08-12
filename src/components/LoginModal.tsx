import { useState } from 'react';
import { auth } from '../firebase';
import { setActiveUser } from '../app/userSlice';
import { useAppDispatch } from '../app/hooks';
import { Close, Container, Content, Modal } from '../styles/loginModalStyles';
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
        setPassword('');
        setEmail('');
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
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

export default LoginModal;
