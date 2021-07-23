import React from 'react';

import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <LeftArea>
        <ListItems>
          <Logo>
            <img src="/images/logo.svg" alt="logo" />
          </Logo>
          <Item>
            <img src="/images/home.svg" alt="Home" />
            Home
          </Item>
          <Item>
            <img src="/images/hash.svg" alt="Home" />
            Explore
          </Item>
          <Item>
            <img src="/images/bell.svg" alt="Home" />
            Notifications
          </Item>
          <Item>
            <img src="/images/mail.svg" alt="Home" />
            Messages
          </Item>
          <Item>
            <img src="/images/bookmark.svg" alt="Home" />
            Bookmarks
          </Item>
          <Item>
            <img src="/images/clipboard.svg" alt="Home" />
            Lists
          </Item>
          <Item>
            <img src="/images/user-list.svg" alt="Home" />
            Profile
          </Item>
          <Item>
            <img src="/images/more.svg" alt="Home" />
            More
          </Item>
        </ListItems>
        <LeftTweetButton>Tweet</LeftTweetButton>
        <ProfileArea>
          <Avatar src="/images/user.svg" alt="user" />
          <UserName>
            Andrzej <p>@Andrzej</p>
          </UserName>
          <More src="/images/more.svg" alt="Home" />
        </ProfileArea>
      </LeftArea>
      <MiddleArea>
        <TopBar>
          Home <img src="/images/star.svg" alt="star" />
        </TopBar>
        <PostArea>
          <PostText>
            <img src="/images/user.svg" alt="user" />{' '}
            <textarea placeholder="What's hapenning?" />
          </PostText>
          <PostButtons>
            <ul>
              <li>
                <img src="/images/image.svg" alt="img" />
              </li>
              <li>
                <img src="/images/film.svg" alt="film" />
              </li>
              <li>
                <img src="/images/bar-chart-2.svg" alt="bar" />
              </li>
              <li>
                <img src="/images/smile.svg" alt="smile" />
              </li>
              <li>
                <img src="/images/calendar.svg" alt="calendar" />
              </li>
            </ul>
            <PostTweet>Tweet</PostTweet>
          </PostButtons>
        </PostArea>
        <Break />
      </MiddleArea>
      <RightArea>Prawa</RightArea>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 3fr;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 200px;
  margin-right: 200px;
`;
const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  height: 100vh;
`;
const MiddleArea = styled.div`
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  display: flex;
  flex-direction: column;
`;
const RightArea = styled.div``;
const ListItems = styled.ul`
  list-style-type: none;
  font-family: inherit;
`;
const Item = styled.li`
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
`;

const TweetButton = styled.button`
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

const LeftTweetButton = styled(TweetButton)`
  margin-top: 25px;
  width: 250px;
  height: 50px;
`;
const ProfileArea = styled.div`
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
`;
const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const More = styled.img`
  filter: invert(1);
  margin-left: auto;
`;
const UserName = styled.div`
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

const TopBar = styled.div`
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
const Break = styled.div`
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
`;
const PostArea = styled.div`
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  height: auto;
`;

const PostText = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-family: inherit;
  textarea {
    background: transparent;
    font-family: inherit;
    resize: none;
    color: white;
    width: 450px;
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
const Logo = styled.div``;
const PostTweet = styled(TweetButton)`
  width: 80px;
  height: 40px;
  margin-left: auto;
  margin-right: 10px;
`;
const PostButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 65px;
  ul {
    li {
      display: inline;
      margin-right: 20px;
      img {
        width: 22px;
      }
    }
  }
`;

export default Home;
