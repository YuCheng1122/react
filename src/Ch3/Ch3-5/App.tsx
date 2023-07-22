import React from 'react'

//1. Props State
//2. LifeCycle 只有class才會有生命週期 function沒有
//3. this

type BtnProps = {
    clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState> {
    constructor(props: BtnProps) {
        super(props)
    }
//組件要解除安裝
componentWillUnmount(): void {
    console.log('unmount')
}
    render(): React.ReactNode {
        return <button onClick={this.props.clickHandler}> +1  </button>
    }
}

type AppProps = {}
type AppState = {
    count: number
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            count: 0
        }

//保證this永遠指向App
        this.countClickHandler = this.countClickHandler.bind(this)
    }
    countClickHandler() {
        //window
        console.log('this',this)
        this.setState((prevState) => {
                return {    
                    count: prevState.count +1
                }  
            })
    }

//組件安裝時    
componentDidMount(): void {
    console.log('mount')
}

//組件更新後
componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
    console.log('update')
}



    render(): React.ReactNode {
        return <>
            <h1>Count: {this.state.count}</h1>
            {this.state.count === 5 ? null : <Btn clickHandler={this.countClickHandler} />}
        </>
    }
}

export default App