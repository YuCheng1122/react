import React from 'react'
import './App.css'
import Header from './Components/Header'


const Body: React.FC =() => {
return <>
   <h1 className='color-blue'>Test</h1>
    <p> .......</p>
   <img src= "./logo512.png" alt='' srcSet=' '/>
</>
}

// return <div>
//    {/ = props -> 屬性 = /}
//    <h1 className='color-blue'>Test</h1>
//    <p> .......</p>
//    <img src= "./logo512.png" alt='' srcSet=' '/>
// </div>
//return React.createElement('h1', {}, ' Test')
// = props -> 屬性 = 

console.log('Components')

const App: React.FC = () => {



// fragment
return <>

<Header/>
<Body/>

</>


}
export default App