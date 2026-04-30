// export default function ToDo({task, isDone}){
//     return(
//         <li style={{
//       margin: '10px',
//       border: '3px solid green',
//       borderRadius: "20px",
//     }}>Task: {task}</li>
//     )
// }
export default function ToDo({task, isDone, time = 0}){
    if(isDone === true){
        return (
            <li className="student">Task: {task}</li>
        )
    }
    else{
        return (
            <li className="student">Pending: {task}</li>
        )
    }
}