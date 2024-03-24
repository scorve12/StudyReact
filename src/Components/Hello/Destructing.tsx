import React from 'react'

type Props = {
    color: string;
    name: string;
  };

function Destructing( { color, name}: Props) {
    return(
        <>
            
            <div style={{ color }}>안녕하세요 {name}</div>
            
        </>
    );
}

/* 
가독성이 떨어지기 때문에 인자를 나눈다.
function Hello({ color, name }) {
  <div style={{color: props.color}}>안녕하세요 {props.name}</div>
}*/

export default Destructing;