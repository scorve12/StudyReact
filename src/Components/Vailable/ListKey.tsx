import React from 'react'

interface UserKey {
    key: number,
    name: string,
    email: string
}

interface UserKeyProps {
    user: UserKey
}

function UserList() {
    const users: UserKey[] = [ // 유저키배열로 초기화
    /*
        만약 키값이 없으면 
        const array = ['a', 'b', 'c', 'd'];
        삽입 삭제가 매우 비효율적으로 바뀐다.
        만약 'z'를 'b' 와 c'사이에 삽입한다고 가정하면
        array[2]에 있던 'c'가 'z'로 초기화된다.
        array[3] = array[2] 'd' = 'c'
        array[4] = arrya[3] 'NULL' = 'd'
        이렇게 원래있던 값이 배열의 앞의 값으로 초기화된다.
    */
        {
            key: 0,
            name: 'kim',
            email: '123@gmail.com'
        },
        {
            key: 1,
            name: 'lee',
            email: '234@gmail.com'
        },
        {
            key: 2,
            name: 'back',
            email: '345@gmail.com'
        }   
    ]

    return(
        <>
          {users.map(item => (
            <div key={item.key}> {item.name}</div>
          ))}
        </>
    )
}

export default UserList;