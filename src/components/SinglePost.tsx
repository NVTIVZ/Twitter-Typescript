/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import db from '../firebase';
import moment from 'moment';
import { useEffect, useState } from 'react';

const SinglePost = (props: any) => {
  const { item } = props;

  const [info, setInfo] = useState<any>();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const response = await db
      .collection('users')
      .where('userId', '==', item.userId)
      .get();
    const data = response.docs.map((user) => user.data());
    setInfo(data[0]);
  };
  console.log(info);
  const timePassed = moment(item.created, 'DD.MM.YYYY, hh:mm:ss').fromNow();
  return (
    <PostContainer>
      <PostAvatar>
        <img src="/images/user.svg" alt="user" />
      </PostAvatar>
      <PostData>
        <UserAndDate>
          <p>{info ? info.displayname : 'User'}</p>
          <p>
            @{info ? info.username : 'user'} . {timePassed}.
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
};

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

export default SinglePost;
