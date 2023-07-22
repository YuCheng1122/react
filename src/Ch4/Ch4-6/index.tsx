import React, { useEffect,useState } from 'react'

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const App: React.FC = () => {

    const [postId, setPostId] =useState(1)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
    console.log(postId)

    async function fetchData(id : number){
        setLoading(true)
        try{ //前端可以在後端出問題的時候回覆使用者可能的問題
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            const data = await res.json() as Comment[]
        }catch (error){
                setError(error as Error)
        }
        setLoading(false)
    }

    function clickHandler(id: number){
        setPostId(id)
    }

    useEffect(() => {
        fetchData(postId)
    }, [postId])


    return <>
        <h1>Fetch</h1>
        <button onClick={()=>clickHandler(1)}>Id 1 data</button>
        <button onClick={()=>clickHandler(2)}>Id 2 data</button>
        {
           error === null ? <p style={{color: 'green'}}>資料獲取成功</p>: <p style={{color:'red'}}>資料獲取失敗</p>

        }
        {
            loading ? <p> loading</p> : null
        }
        
    </>
}

export default App