import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
`;

export const PostAvatar = styled.div`
  img {
    width: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80%;
`;
export const UserAndDate = styled.div`
  display: flex;
  flex-wrap: wrap;
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
export const PostContent = styled.div`
  margin-left: 7px;
  margin-top: 5px;
`;
export const SocialButtons = styled.ul`
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
