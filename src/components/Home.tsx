import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchPosts, uploadPost } from '../app/postsSlice';
import moment from 'moment';

const Home = () => {
  const user = useAppSelector((state) => state.user);
  const fetechedPosts = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();

  const [editorText, setEditorText] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type singlePost = {
    content: string;
    userName: string;
    userPhoto: string;
    created: any;
  };

  const handleUpload = () => {
    dispatch(
      uploadPost({
        text: editorText,
        uploadUser: user.userName,
        uploadUserPhoto: user.photoURL,
      })
    );
    setEditorText('');
    dispatch(fetchPosts());
  };

  const RenderPosts = () => {
    return fetechedPosts.map((item: singlePost, key: number) => {
      const timePassed = moment(item.created, 'DD.MM.YYYY, hh:mm:ss').fromNow();

      return (
        <PostContainer key={key}>
          <PostAvatar>
            <img src={item.userPhoto} alt="user" />
          </PostAvatar>
          <PostData>
            <UserAndDate>
              <p>{item.userName}</p>
              <p>
                @{item.userName} . {timePassed}.
              </p>
            </UserAndDate>
            <PostContent>{item.content}</PostContent>
            <SocialButtons>
              <li>
                <img src="/images/message-circle.svg" alt="" />
              </li>
              <li>
                <img src="/images/share-2.svg" alt="" />
              </li>
              <li>
                {' '}
                <img src="/images/heart.svg" alt="" />
              </li>
              <li>
                {' '}
                <img src="/images/share.svg" alt="" />
              </li>
            </SocialButtons>
          </PostData>
        </PostContainer>
      );
    });
  };

  return (
    <Container>
      {user.userName ? null : <Redirect to="/" />}

      <LeftArea>
        <ListItems>
          <Logo>
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
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
          <Avatar src={user.photoURL} alt="user" />
          <UserName>
            {user.userName} <p>@{user.userName}</p>
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
            <img src={user.photoURL} alt="user" />{' '}
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What's hapenning?"
            />
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
            <PostTweet
              disabled={!editorText ? true : false}
              onClick={() => {
                handleUpload();
              }}
            >
              Tweet
            </PostTweet>
          </PostButtons>
        </PostArea>
        <Break />
        <RetrievedPosts>{fetechedPosts[0] && RenderPosts()}</RetrievedPosts>
      </MiddleArea>
      <RightArea>
        <Search>
          <img src="/images/search.svg" alt="search" />
          <input type="text" placeholder="Search Twitter" />
        </Search>
        <FirstPanel>
          <div>
            <span>Trends for you</span>
          </div>
          <div>
            <p>Trending in Poland</p>
            <p>#highleague</p>
            <p>15.9K Tweets</p>
          </div>
          <div>
            <p>Trending in Poland</p>
            <p>#inflacja</p>
            <p>12.3K Tweets</p>
          </div>
          <div>
            <p>Trending in Poland</p>
            <p>Natsu</p>
            <p>11.9K Tweets</p>
          </div>
          <div>
            <p>Trending in Poland</p>
            <p>#pozdromarek</p>
            <p>25.9K Tweets</p>
          </div>
          <div>
            <p>Trending in Poland</p>
            <p>Muszynski</p>
            <p>2,111 Tweets</p>
          </div>

          <div>Show More</div>
        </FirstPanel>
        <SecondPanel>
          <div>
            <span>Who to follow</span>
          </div>
          <FollowContent>
            <img src="/images/user.svg" alt="usr" />
            <div>
              <p>Andrzej Glowica</p>
              <p>@Glowica</p>
            </div>
            <FollowButton>Follow</FollowButton>
          </FollowContent>
          <FollowContent>
            <img src="/images/user.svg" alt="usr" />
            <div>
              <p>Andrzej Glowica</p>
              <p>@Glowica</p>
            </div>
            <FollowButton>Follow</FollowButton>
          </FollowContent>
          <FollowContent>
            <img src="/images/user.svg" alt="usr" />
            <div>
              <p>Andrzej Glowica</p>
              <p>@Glowica</p>
            </div>
            <FollowButton>Follow</FollowButton>
          </FollowContent>
          <div>Show more</div>
        </SecondPanel>
        <Tos>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Ads info</p>
          <p>More ...</p>
          <p>© 2021 Twitter, Inc.</p>
        </Tos>
      </RightArea>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 3fr;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 250px;
  margin-right: 250px;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  align-items: center;
  font-family: inherit;
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MiddleArea = styled.div`
  border-right: solid rgba(255, 255, 255, 0.2) 1px;
  display: flex;
  flex-direction: column;
`;
const RightArea = styled.div`
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
const Logo = styled.div`
  margin-left: 15px;
`;
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

const PostTweet = styled(TweetButton)`
  width: 80px;
  height: 40px;
  margin-left: auto;
  margin-right: 10px;
  &:disabled {
    background: gray;
  }
`;
const PostButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 65px;
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

const RetrievedPosts = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostContainer = styled.div`
  display: flex;
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
`;

const PostAvatar = styled.div`
  img {
    width: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
const PostData = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80%;
`;
const UserAndDate = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 7px;
  p:nth-child(1) {
    font-weight: 600;
    margin-right: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  p:nth-child(2) {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const PostContent = styled.div`
  margin-left: 7px;
  margin-top: 5px;
`;
const SocialButtons = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 7px;
  margin-bottom: 3px;
  li {
    padding: 6px 7px;
    border-radius: 50%;
    transition: background 0.2s ease-in-out;
    img {
      width: 20px;
      opacity: 0.5;
    }
  }
  li:nth-child(1) {
    &:hover {
      background: rgba(29, 161, 242, 0.2);
    }
  }
  li:nth-child(2) {
    &:hover {
      background: rgba(2, 237, 85, 0.2);
    }
  }
  li:nth-child(3) {
    &:hover {
      background: rgba(194, 21, 85, 0.3);
    }
  }
  li:nth-child(4) {
    &:hover {
      background: rgba(29, 161, 242, 0.2);
    }
  }
`;

const Search = styled.div`
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

const PanelsExample = styled.div`
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

const FirstPanel = styled(PanelsExample)`
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

const SecondPanel = styled(PanelsExample)``;

const FollowContent = styled.div`
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

const FollowButton = styled(TweetButton)`
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

const Tos = styled.div`
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

export default Home;
