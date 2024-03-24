import React, { useState } from "react";

function Counter() {
    //[객체타입, setter함수] = useState(초기화하고 싶은 타입)
    // new 랑 비슷하다 생각하면 된다.
    const [number, setNumber] = useState(0);
    const [name, setName ] = useState("박재호");
    const [Ename, setError ] = useState("에러");

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    const setNameKim = () => {
        setName("김재호");
    }

    const setNameBack = () => {
        setName("박재호");
    }

    //타입이 같아도 된다.  

    const errorName = () => {
        setError(name);
    }

    return (  
         //onClick={}으로 하면 랜더링 시점에 한번만 적용이 된다.
            <div>
                <h1>{number}</h1>
                <h3>onClick</h3>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>

                <h1>이름: </h1>
                <h3>{name}</h3>
                <button onClick={setNameKim}>김씨</button>
                <button onClick={setNameBack}>박씨</button>

                <h1>에러:</h1>
                <h3>{Ename}</h3>
                <button onClick={errorName}>errer</button>
            </div>
    )
}

export default Counter;