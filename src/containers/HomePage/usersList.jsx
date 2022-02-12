import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { useSelector } from 'react-redux';

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  
  img {
    width: 100%
    height: 100%
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 10px;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users
}));

export function UsersList(props) {
  const { users } = useSelector(stateSelector);
  
  const isEmptyUsers = !users || (users & users.length === 0);

  const history = useNavigate();

  const goToUserPage = (id) => {
    history(`/user/${id}`)
  }
  if(isEmptyUsers) return null;

  return <UsersContainers>
    {users.map(({ id, first_name, last_name, avatar }, i) => (
      <UserWrapper key={i} onClick={() => goToUserPage(id)}>
        <UserImage>
          <img src={avatar} />
        </UserImage>
        <UserName>
          { first_name} { last_name }
        </UserName>
      </UserWrapper>
    ))}
  </UsersContainers>
}