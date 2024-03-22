import React from 'react';

function HelloProp(props :any) {
    return(
        <div>이것은 props {props.name}</div>
    );
}

function HelloProps(props:any){
    return(
        <div style={{color: props.color}}>
        이것은 비구조화할당 {props.name}
        </div>
    )
}

export default HelloProp;