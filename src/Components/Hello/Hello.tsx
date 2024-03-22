import React from 'react';

/*jsx == tsx 
    javaScript가 아닌 typeScript로 XML 형태로 만든것
*/
function Hello() {
    const name = 'KimJaeHo'

    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return(
        <>
            <div style={style}>안녕하세요. {name} 씨</div>
            <div className='gray-box'>여기는 회색</div>
        </>
    );
     
}

export default Hello;


