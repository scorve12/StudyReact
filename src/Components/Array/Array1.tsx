import React, { useState } from 'react';

interface UserProps {
  username: string;
  email: string;
  /*
    input tag에서  입력요소의 값이 변경될 때 호출됩니다.
    e : 이벤트객체
    React.ChangeEvent<> : React에서 일반적인 HTML 이벤트를 처리하기 위한 제네릭 타입
    HTMLInputElement : HTML Input 타입이다.
    => : 반환타입이 void로 반환할 객체가 없다는 것을 뜻한다.
  */    
}

interface User {
    username: string;
    email: string;
}

const CreateUser: React.FC<UserProps> = ({ username = '', email = '' }) => {
    const [localUsername, setLocalUsername] = useState(username);
    const [localEmail, setLocalEmail] = useState(email);
    const [users, setUsers] = useState<User[]>([]);

    // onChange 함수: 입력 값이 변경될 때마다 호출되어 상태를 업데이트합니다.
    /*
    setter: : usestate setter 함수를 의미한다.
    React.Dispatch<ActionType> : 특정한 액션을 받아들여 처리하는 함수타입으로 정의
    React.SetStateAction<string> : 'string' 타입의 값ㅇ르 직접설정하거나 이전 상태를 기반으로 새로운 상태를 계산하는 함수를 인자로 받는 유니온 타입이다.
    */
    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value); // setLocalUsername() 객체가 들어간다.
    };

    //User배열 추가 함수
    const handleAddUser = () => {
        setUsers([...users, {username: localUsername, email: localEmail}]);
        console.log(`Creating user: ${username} with email: ${email}`);
        setLocalUsername('');
        setLocalEmail(''); //입력필드 초기화
    }
    
    return (
        <div>
            <input
              name="username"
              placeholder="계정명"
              onChange={handleChange(setLocalUsername)} //setLocalUsername : React.SetStateAction<>에 속한다.
              value={localUsername}
            />
            <input 
              name="email"
              placeholder="이메일"
              onChange={handleChange(setLocalEmail)}
              value={localEmail}
            />
            <button onClick={handleAddUser}>등록</button>
            <ul>
                {users.map((user, index) => (
                <li key={index}>user:{user.username} / email:{user.email}</li>  // 사용자 목록을 화면에 렌더링
                ))}
            </ul>
        </div>
    );
}

export default CreateUser;