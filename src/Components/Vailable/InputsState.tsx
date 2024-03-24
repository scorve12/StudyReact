import React, { useState } from 'react';

function InputSamples() {
    //const onChange = (e: any) => {};
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const {name, nickname} = inputs;

    //e: 이벤트 객체를 가르킨다.
    //e.target: 실제로 발생한 DOM요소를 가르킨다.
    const onChange = (e: any) => {
        const {value, name} = e.target; 
        setInputs({
            //inputs[name] = value; 이렇게 직접 수정하면 안된다.
            ...inputs, 
            //... spread문법 객체의 내용을 "펼쳐서" 기존 객체를 복사한다.
            [name]: value
        });
    }
    /*
    useState hook과 spread 연산자
    함수형 컴포넌트에서 state 관리를 위한 hook useState(...)는 class형 컴포넌트 state의 특정 키/값 쌍에 대응합니다. 풀어서 설명하자면
    class형 컴포넌트의 this.state.<키> == 함수형 컴포넌트의 useState(...)[0]
    class형 컴포넌트의 this.setState({키: 값}) == 함수형 컴포넌트의 useState(...)[1](값)
    본문에서 state setter에서 spread 연산자를 사용한 이유는 저 값이 object타입이기 때문입니다.
    함수형 컴포넌트에서 useState로 관리하는 어떤 state 값이 object 타입이 아니거나,
    class형 컴포넌트일 경우 spread 연산자를 사용할 필요가 없습니다. 
    */

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    }

    return (
        <>
            <input name = "name" placeholder='이름' onChange={onChange} value={name} />
            <input name = "nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </>
    );
}

export default InputSamples