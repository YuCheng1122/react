import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => { //監聽狀態
        if (counter % 2 === 0) {
            setText('偶數')
        } else {
            setText('奇數')
        }
    }, [counter])//dependency array

    const [text, setText] = useState('偶數')
    const handleClick = () => {
        setCounter(counter + 1);
    }




    // //mount
    // useEffect(() => {
    //     console.log('hello')
    // },[])}//依賴陣列(dependency) 陣列不放的話可以模擬demount的效果 、 fetch的效果

    return <>
        <h1> count: {counter}</h1>
        <button onClick={handleClick}>+1</button>
        <p>{text}</p>
    </>


}
export default App