import React, {useEffect, useState} from 'react'

let interval: NodeJS.Timeout | null = null
let num = 0
const App: React.FC =() => {
    
    const [counter, setCounter] = useState(0)

    useEffect(() => { //callback function
        interval = setInterval(()=>{
            num++
            console.log(num)
        },1000)
    return () => { //在 callback function 中間加一個return 可以用於網頁的監聽器功能並重新刷新狀態
        if (interval !== null){
            clearInterval(interval)
            num=0 
        }
    }
    },[])

    function clickHandler() {
        setCounter(counter +1)
    }
 
 
 return <>
    <h1>計時器: {counter}</h1>
    <button onClick={clickHandler}>+1</button>
    </>
    
}
export default App