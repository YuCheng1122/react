//import { timeStamp } from "console";
import React, { useState } from "react";

//1.
// const App: React.FC = () => {

//     const [counter, setCounter] = useState<number>(0)

//     function counterHandler() {
//         if (counter !== undefined) {
//             setCounter(counter + 1)
//         }
//     }
//     return <>
//         <h1>counter: {counter}</h1>
//         <button onClick={counterHandler}>+1</button>
//     </>

// }
// export default App

//2.

// const Parent: React.FC = () => {
//     let [count, setCount] = useState(0);
//     return (
//         <div onClick={() => setCount(prev => prev +1)} >
//         Parent clicled {count} timeStamp
//         <Child/>
//         </div>
//     );
// }
// const Child: React.FC = () => {
//     let [count, setCount] = useState(0);
//     return (
//         <button onClick={() => setCount(count+1)} >
//         Parent clicled {count} times
//         </button>
//     );
// }

// export default Parent

//3.

const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        function callBack(prev: number){
          return  prev +1
        }

        setCounter(callBack);
        setCounter(callBack);
    }
    return(
        <div className="App">
            <h1>Counter Component</h1>
            <div>
                counter: {counter}
            </div>
            <br/>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Counter