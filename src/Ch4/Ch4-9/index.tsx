// 1. Window 最佳處理時機
// 2. 一般的方式來獲HTML元素
// 3. 用REF取得HTML元素 最推薦的做法


import React, {useState, useRef, useEffect} from 'react'


const App: React.FC = () => {
    
    const h1Ref = useRef<HTMLHeadingElement>(null)

    useEffect(() =>{
        // const element = document.getElementById('hi')
        // //TODO del
        // console.log(element)
        // // console.log(window)
        console.log('h1Ref', h1Ref.current)
    },[])

    return <>
        {/* <h1 id='h1'>Ref</h1> */}
        <h1 ref={h1Ref}>Ref</h1>
    </>
}
export default App