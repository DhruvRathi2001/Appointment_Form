import React, { useState } from 'react'
import "../styles/appointment.css"

const Appointment = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("") 
const [phone, setPhone] = useState("")
const [date, setDate] = useState("")

const collectData = async()=>{

if(!name || !email || !phone || !date){
 
  alert('PLEASE FILL UP ALL THE DETAILS')
  return false;
}

if(phone.length!=10){
  alert('PLEASE ENTER A VALID 10 DIGIT PHONE NUMBER')
  return false;
}


  let result = await fetch("http://localhost:4000/", {
      method: "post",
      body: JSON.stringify({ name, email, phone, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

    
    setName("")
    setEmail("")
    setPhone("")
    setDate("")

    alert('YOUR APPOINTMENT HAS BEEN BOOKED')

}


  return (
    <div className='appointment'>
      

      <section className='form'>
      <h1>APPOINTMENT FORM</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

     <input
        className="inputBox"
        type="date"
        placeholder="Enter Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button  onClick={collectData} className="appButton" type="button">
        Book Appointment
      </button>

      </section>
     
    </div>
  )
}

export default Appointment
