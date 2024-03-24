import React from 'react';

interface Props {
    name: string;
    color: string;
    isSpe?: boolean;
    //변수이름? : 이렇게 하면 선택적으로 인자를 넣을 수 있게 된다.
}

function IsSpecial({name, color, isSpe}: Props) {
    return(
        <div style={{ color }}>
            {isSpe && <b>렌더링!!</b>}
            안녕하세요 {name}
        </div>
    );
}

export default IsSpecial;