import { useState } from 'react';
import db, { doesUsernameExists, auth } from '../firebase';
import {
  Close,
  Container,
  Content,
  Modal,
} from '../styles/registerModalStyles';

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
    console.log(usernameExists);
    if (!usernameExists[0]) {
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
        setMessage('');
        setError(err.message);
      }
    } else {
      setError('Username already exists');
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

export default RegisterModal;
