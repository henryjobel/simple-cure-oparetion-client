
import { json } from 'react-router-dom'
import './App.css'

function App() {
  
  const handleAddUser = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const users = {name,email}
    console.log(users)


    fetch('http://localhost:5000/user',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }


  return (
    <>
      <h1>Simple CURD</h1>
      <form onSubmit={handleAddUser}>
        <input type="name" name='name' placeholder='Name' />
        <br />
        <input type="email" name="email" placeholder='Email' />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
