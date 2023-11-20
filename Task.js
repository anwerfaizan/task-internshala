// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Task(){

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[gender,setGender]=useState("Male");
    const[phoneNumber,setPhoneNumber]=useState(1234567809);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        .then(res=>res.json())
        .then(data=>{
            setGender(data.results[0].gender);
            setFirstName(data.results[0].name.first);
            setLastName(data.results[0].name.last);
            setPhoneNumber(data.results[0].phone);
        })
    },[])

    //https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI

    return(
        <div> 
           <div className="container">
           <div className="row mt-5  mb-5">
           <div className="col-12">
            <div className="card">
            <div className="row">
            <div className="col-md-5">
            <img src="https://randomuser.me/api/portraits/women/88.jpg" class="card-img" alt=""/>
            </div>
            <div className="col-md-7">
            <div className="card-body">
            <h4 className="card-title">Details</h4>
            <table className="table table-borderless">
            <tbody>
            <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
             </tr>
            <tr>
            <td>{gender}</td>
            </tr>
            <tr>
            <td>{phoneNumber}</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>

            </div>
           </div>
           </div>
           </div>
        </div>
    )
}

export default Task;










































































































// import React,{Component} from "react";

// class Task extends Component{

//     constructor(){
//         super();
//         this.state={
//             tasks:[{task:'check mails',id:1},{task:'read articles',id:2},{task:'playing cricket',id:3}],
//             currTask:''
//         }
//     }

//     handleChange=(e)=>{
//         console.log(e.target.value);
//         this.setState({
//             currTask:e.target.value
//         })
//     }

//     handleSubmit=()=>{
//         this.setState({
//             tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
//             currTask:''
//         })
//     }

//     handleDelete=(id)=>{
//         let narr=this.state.tasks.filter((taskObj)=>{
//             return taskObj.id !== id
//         })

//         this.setState({
//             tasks:[...narr]
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <input type='text' value={this.state.currTask} onChange={this.handleChange}/>
//                 <button onClick={this.handleSubmit}>Submit</button>
//                 <ul>
//                { this.state.tasks.map((taskObj)=>(
//                     <li key={taskObj.id}>
//                     <p>{taskObj.task}</p>
//                     <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
//                     </li>
//                 ))
//                }
//             </ul>
//             </div>
//         );
//     }
// }

// export default Todo;