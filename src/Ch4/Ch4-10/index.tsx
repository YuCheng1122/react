import React, { useEffect, useRef, useState } from 'react'

const App: React.FC = () => {

    const [accountVal, setAccountVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')

    function login() {
        // const Account = document.getElementById('Account') as HTMLInputElement
        // const Password = document.getElementById('Password') as HTMLInputElement
    }

    function onChangeHandler(event: React.FormEvent<HTMLInputElement>){
        if (event.currentTarget){
            setAccountVal(event.currentTarget.value) //沒加不等打字
           
        }

    }
    function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>){
        if (event.currentTarget){
            setPasswordVal(event.currentTarget.value) //沒加不等打字
           
        }
    }


    return <>
        <h1>Form</h1>
        <p>Account</p>
        <input type="text" name="" value={accountVal} id="Account" onChange={onChangeHandler} />
        <p>Enter your Account: {accountVal}</p>
        <p>Password</p>
        <input type="Password" name="" value={passwordVal} id="Password" onChange={onChangePasswordHandler} />
        <div>
            <button onClick={login}>Login in</button>
        </div>
    </>
}

export default App