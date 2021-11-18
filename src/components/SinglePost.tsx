/* eslint-disable react-hooks/exhaustive-deps */
import db from '../firebase';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  PostContainer,
  PostAvatar,
  PostData,
  UserAndDate,
  PostContent,
  SocialButtons,
} from '../styles/singlePostStyles';

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

export default SinglePost;
