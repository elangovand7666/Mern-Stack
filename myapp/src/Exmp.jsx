import {useState} from 'react'
function Exmp(){
    const [value,setValue] = useState(" ")
    let timer =()=>{
        setTimeout(()=>{
            setValue="hirvsvcsdcvsdcasdc";
        },2000)
    }
    return(
        <div>
            <button onClick={timer}>click me</button>
            <h1>{value}</h1>
        </div>
    )
}
export default Exmp;