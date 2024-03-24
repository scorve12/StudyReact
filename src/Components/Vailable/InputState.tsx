import React, {useState} from "react"

function InputSample() {
    const [text, setText] = useState("");

    const onChange = (e: any) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return(
        <>
            <input onChange={onChange} value = {text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </>
    );
}

export default InputSample