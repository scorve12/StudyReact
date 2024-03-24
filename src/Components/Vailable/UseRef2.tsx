import React, { useRef } from 'react';


import UserList, { User, UserProps } from './ListRender'
/*  
    User 인터페이스 가져오기
    export interface User {
    id: number;
    username: string;
    email: string;
}
    useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데요. 
    컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.
*/

function UserRef2() {
    const users: User[] = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];

    const nextId = useRef(4);
    const onCreate = () => {
        nextId.current += 1;
    }
    return (
        <div>
            {users.map(user => (
            <div>
            <b>{user.username}</b> <span>({user.email})</span>
            </div>
        ))}
    </div>
    );

  }
  
export default UserRef2;