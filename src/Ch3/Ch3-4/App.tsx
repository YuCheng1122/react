import React, { useState } from 'react'

type BtnProps = {
    currentNum: number
    onClickHandler: () => void
}

//改變變數觸發渲染 --> State 可以觸發畫面更新

const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {

    // const [num2, setNum] = useState(999)

    // //let num2 = 999

    // function counter() {
    //     setNum(num2 + 1)
    //     //currentNum++

    // }
    // console.log(num2)
    return (
        <button onClick={onClickHandler}>
            +1 ,
            <span>
                now sum: {currentNum}
            </span>
        </button>
    )
}


//props state
const App: React.FC = () => {
    //const num = 0
    const [num, setNum] = useState(0)

    function btnClickHandler() {
        setNum(num + 1)
    }
    return <>

        <h1>Caculator: {num} </h1>
        <Btn currentNum={num} onClickHandler={btnClickHandler} />

    </>
}
export default App