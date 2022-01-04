import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 4fr 7fr 6fr;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 8vw;
  margin-right: 8vw;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (max-width: 476px) {
    position: relative;
  }
`;
export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  font-family: inherit;
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  height: 100vh;
  @media (max-width: 768px) {
    font-size: 0px;
  }
  @media (max-width: 476px) {
    position: absolute;
    height: 50px;
    bottom: 0;
    border-right: none;
  }
`;
export const MiddleArea = styled.div`
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 350px;
  margin-left: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  img {
    @media (max-width: 768px) {
      height: 28px;
    }
  }
`;
export const ListItems = styled.ul`
  list-style-type: none;
  font-family: inherit;
  div:first-child {
    @media (max-width: 476px) {
      display: none;
    }
  }
  li:nth-child(n + 7) {
    @media (max-width: 476px) {
      display: none;
    }
  }
  li:nth-child(3) {
    @media (min-width: 769px) {
      display: none;
    }
  }
  li:nth-child(4) {
    @media (max-width: 769px) {
      display: none;
    }
  }
  @media (max-width: 476px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: black;
    width: 100%;
    z-index: 99;
    border-top: solid rgba(255, 255, 255, 0.2) 1px;
  }
`;
export const Item = styled.li`
  display: flex;
  font-family: inherit;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 25px;
  img {
    filter: invert(1);
    height: 24px;
    margin-right: 8px;
  }
  &:hover {
    color: #1da1f2;
    background: rgba(29, 161, 242, 0.2);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 0px;
  }

  @media (max-width: 476px) {
    margin-top: 0;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      background: none;
      cursor: pointer;
    }
  }
`;

export const TweetButton = styled.button`
  background: #1da1f2;
  border: none;
  color: inherit;
  font-size: 18px;
  font-weight: 700;
  border-radius: 25px;
  transition: background 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #0294ed;
  }
`;

export const LeftTweetButton = styled(TweetButton)`
  margin-top: 25px;
  width: 250px;
  height: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ProfileArea = styled.div`
  margin-top: auto;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 9px 16px;
  border-radius: 30px;
  width: 220px;
  &:hover {
    background: rgba(29, 161, 242, 0.2);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: auto;
  }
  div {
    @media (max-width: 768px) {
      display: none;
    }
  }
  img:last-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 476px) {
    display: none;
  }
`;
export const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const More = styled.img`
  filter: invert(1);
  margin-left: auto;
`;
export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 600;
  p {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 26px;
  }
`;
export const Break = styled.div`
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
`;
export const PostArea = styled.div`
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  height: auto;
`;

export const PostText = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-family: inherit;
  textarea {
    background: transparent;
    font-family: inherit;
    resize: none;
    color: white;
    width: auto;
    height: 35px;
    font-size: 24px;
    font-weight: 400;
    border: none;
    &:focus {
      outline: none;
    }
  }
  img {
    width: 48px;
    border-radius: 50%;
  }
`;

export const PostTweet = styled(TweetButton)`
  width: 80px;
  height: 40px;
  margin-left: auto;
  margin-right: 10px;
  &:disabled {
    background: gray;
  }
`;
export const PostButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 65px;
  @media (max-width: 768px) {
    margin-left: 35px;
  }
  @media (max-width: 476px) {
    margin-left: 20px;
  }
  ul {
    &:hover {
      cursor: pointer;
    }
    li {
      display: inline;
      margin-right: 20px;
      img {
        width: 22px;
      }
    }
  }
`;

export const RetrievedPosts = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Search = styled.div`
  display: flex;
  background: rgb(21, 24, 28);
  padding: 10px 18px;
  border-radius: 1111px;
  margin-top: 4px;
  border: 1px solid transparent;
  img {
    opacity: 0.5;
    margin-right: 15px;
  }
  input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    width: 80%;
    font-size: 15px;
  }
  &:focus-within {
    border: 1px solid #1da1f2;
    background: transparent;
  }
`;

export const PanelsExample = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(21, 24, 28);
  margin-top: 25px;
  border-radius: 15px;
  & > div {
    padding: 12px;
    transition: background 0.2s ease-in-out;
    span {
      font-weight: 600;
      font-size: 18px;
    }
  }
  & > div:not(:last-child) {
    border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  }
  div:last-child {
    color: #1da1f2;
    border-radius: 0 0 15px 15px;
    padding: 18px 12px;
  }
  & > div:not(:first-child) {
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
    }
  }
`;

export const FirstPanel = styled(PanelsExample)`
  p:nth-child(2n + 1) {
    opacity: 0.5;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
  }
  p:nth-child(2) {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const SecondPanel = styled(PanelsExample)``;

export const FollowContent = styled.div`
  display: flex;
  align-items: center;
  p:nth-child(1) {
    font-weight: 600;
    font-size: 15px;
  }
  p:nth-child(2) {
    opacity: 0.5;
    font-size: 14px;
  }
  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const FollowButton = styled(TweetButton)`
  margin-left: auto;
  background: transparent;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  padding: 4px 10px;
  font-size: 17px;
  &:hover {
    background: rgba(2, 148, 237, 0.1);
  }
`;

export const Tos = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  opacity: 0.5;
  margin-top: 15px;
  p {
    margin-right: 12px;
    margin-top: 2px;
  }
  p:not(:last-child) {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
