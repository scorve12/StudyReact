import React, { useRef, useState } from 'react';

/*
 특정 DOM을 선택하기 위해서 한다.
 useRef라는 Hook함수를 사요한다.
 클래스, 컴포넌트 형은 React.createRef를 사용한다.
 */

function UseRefs() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const nameInput = useRef();

    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    };

    return(
        <>
            <input name="name" placeholder="이름" onChange={onChange} value = {name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value = {nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </>
    )
}

export default UseRefs;