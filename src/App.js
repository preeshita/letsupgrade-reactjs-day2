import React,{useState} from 'react'
import "./style.css"

const App = ()=>{
   let [score, setScore] = useState(0)
   return(
       <div>
           <h1> Hey this is my counter application</h1>
           <h3>The value of score is {score}</h3>
           <button onClick={()=>(score<25)? setScore(score+1) :""}> Increment</button>
           <button onClick={()=>(score>0)? setScore(score-1) :""}> decrement</button>
           <button onClick={()=>{setScore(0)}}> Reset</button>
       </div>
   )




   return (
       <h1>hello world</h1>
   )
}

export default App
