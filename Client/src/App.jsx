import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import axios from 'axios'

function App(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className ="mb-3">
    <label htmlFor="exampleInputname" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="nameHelp" className="form-text" onChange={(e)=> setName(e.target.value)}></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" onChange={(e) =>setEmail(e.target.value)}></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) =>setPassword(e.target.value)}/>
 
  </div>
  <button type="reg" >Register</button>
  </form>

  < Link to="/Login" type="submit" className="btn btn-primary">Submit</Link>

        </>
    )
}

export default App