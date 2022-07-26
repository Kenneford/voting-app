import React from 'react'
import {useState, useEffect} from 'react'

export default function TotalVotes({nppVoteCount, ndcVoteCount, pppVoteCount, cppVoteCount}) {
    const [totalVotes, setTotalVotes] = useState(0)

    useEffect(()=>{
        setTotalVotes(nppVoteCount + ndcVoteCount + pppVoteCount + cppVoteCount)
    })
  return (
    <div className='totalVotes'>
        <h1>{totalVotes}</h1>
    </div>
  )
}
