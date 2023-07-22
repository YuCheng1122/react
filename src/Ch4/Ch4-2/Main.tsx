import { useState, useEffect } from 'react'

// Function
function getCurrentScore() {

    return 100
}


// 自定義的 hook (class HOC)
function useGetTotalScore(boardName: string) {
    const [score, setScore] = useState(0)
    useEffect(() => {
        const currentScore = getCurrentScore() + getScoreByBoardName(boardName  )
        setScore(currentScore)
    }, [])
    return score
}

function getScoreByBoardName(boardName: string) {
    if (boardName === 'boardA') {
        return 200
    }
    if (boardName === 'boardB') {
        return 1000
    }
    return 0
}


//-----------------------------------------------------------------------------------------------------------------------------------
// A Component
const ScoreBoardA: React.FC = () => {

    // useEffect(() => {
    //     const currentScore = getCurrentScore() + getScoreByBoardName('boardA')
    //     setScore(currentScore)
    // }, [])
    const score = useGetTotalScore('boardA')
    return <p>A Total Score:{score}</p>
}

//B Component
const ScoreBoardB: React.FC = () => {

    const score = useGetTotalScore('boardB')
    return <p>B Total Score: {score}</p>
}

const Main: React.FC = () => {
    return <>
        <ScoreBoardA />
        <ScoreBoardB />



    </>
}

export default Main

