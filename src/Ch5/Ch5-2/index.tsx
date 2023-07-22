import React,{useState} from 'react'
import { BtnProvider,useBtnContext } from './Context/BtnContext'

type Props ={}

const D : React.FC<Props> = () => {
    const data = useBtnContext()
    return <button>D Button</button>
}

const C : React.FC<Props> = () => {
    return <>
    <p>C Component</p>
    <D />
    </> 
}

const B : React.FC<Props> = () => {
    return <>
    <p>B Component</p>
    <C />
    </> 
   
}

const App: React.FC = () => {
    return <BtnProvider>
      <h1>APP</h1>
      <B/>
    </BtnProvider>
  }
  
export default App