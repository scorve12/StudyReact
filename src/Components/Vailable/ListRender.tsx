import React from 'react'

export interface User {
    id: number;
    username: string;
    email: string;
}
//타입정의 : 타입스크립트이기 때문에 해야한다.

export interface UserProps {
    user: User;
}
//Props로 관리한다.

export interface UserListProps {
    users: User[]; // 여기서 users는 User 객체의 배열입니다.
}

// 사용자 배열의 타입을 명시
const users: User[] = [
    {
        id: 1,
        username: 'lee',
        email: 'lee@gmail.com'
    },
    {
        id: 2,
        username: 'kim',
        email: 'kim@gmail.com'
    },
    {
        id: 3,
        username: 'back',
        email: 'back@gmail.com'
    }
];

function UserList({ users }: UserListProps) {
    

    function User({user}: UserProps) {
        return (
            <div>
                <b>{user.username}</b> <span>({user.email})</span>
            </div>
        )
    }

    return (
        <>
            <div>
              {users.map(user => (
              <User user={user} key={user.id} />
              ))}
            </div>
        </>
    )
}

export default UserList;