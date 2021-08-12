import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchPosts, uploadPost } from '../app/postsSlice';
import { fetchUserDetails } from '../app/userSlice';
import SinglePost from './SinglePost';
import {
  Container,
  LeftArea,
  ListItems,
  Logo,
  Item,
  LeftTweetButton,
  ProfileArea,
  Avatar,
  UserName,
  More,
  MiddleArea,
  TopBar,
  PostArea,
  PostText,
  PostButtons,
  PostTweet,
  Break,
  RetrievedPosts,
  RightArea,
  Search,
  FirstPanel,
  SecondPanel,
  FollowContent,
  FollowButton,
  Tos,
} from '../styles/homeStyles';

const Home = () => {
  const user = useAppSelector((state) => state.user);
  const fetechedPosts = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();

  const [editorText, setEditorText] = useState('');

  useEffect(() => {
    dispatch(fetchUserDetails(user.userId));
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type singlePost = {
    content: string;
    userName: string;
    userId: string;
    created: any;
  };

  const handleUpload = () => {
    dispatch(
      uploadPost({
        text: editorText,
        uploadId: user.userId,
      })
    );
    setEditorText('');
    dispatch(fetchPosts());
  };

  const RenderPosts = () => {
    return fetechedPosts.map((item: singlePost, key: number) => {
      return <SinglePost item={item} key={key} />;
    });
  };

  return (
    <Container>
      {user.userEmail ? null : <Redirect to="/" />}

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
          <Avatar
            src={user.photoURL ? user.photoURL : '/images/user.svg'}
            alt="user"
          />
          <UserName>
            {user.displayName} <p>@{user.userName}</p>
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
            <img
              src={user.photoURL ? user.photoURL : '/images/user.svg'}
              alt="user"
            />{' '}
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

export default Home;
