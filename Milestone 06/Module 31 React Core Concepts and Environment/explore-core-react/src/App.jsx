import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React Core Concepts</h1>

      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>

      <Person></Person>
      <Student name="Aka" dept="CSE"></Student>
      <Student name="Poka" dept="EEE"></Student>

      <Person></Person>

      <Developer name="Azmir" tech="JS"></Developer>
      <Developer name="Nur" tech="PY"></Developer>
      <Developer name="Antor" tech="Java"></Developer>

      <Player name="Sakib" runs="5000"></Player>

      <Players name="Gail" runs="10050"></Players>

      <Salami event="Rojar Eid" amount="4000"></Salami>
      <Salami event="Final exam" amount="3000"></Salami>
      <Salami event="Kurbani Eid" amount="5000"></Salami>
      
    </>
  )
}

function Person() {
  const name = "Azmir";
  const age = 24;

  const personStyle = {
    color: 'skyblue',
    textAlign: 'right'
  }

  return (
    <p style={personStyle}>I am a {name} & my age is {age}</p>
  )
}

function Student(prop) {
  console.log(prop);
  return (
    <div className='student'>
      <p>Name: {prop.name}</p>
      <p>Dept: {prop.dept}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);

  return (
    <div style={{
      margin: '10px',
      border: '3px solid green',
      borderRadius: "20px",
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Player(match){
  return(
    <div className='player'>
      <h3>Name: {match.name}</h3>
      <p>Runs: {match.runs}</p>
    </div>
  )
}

// Another way with destructring
// {name, runs} = { name: "Nur", tech: "PY" }

function Players({name, runs}){
  return(
    <div className='player'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Salami({event, amount = 0}){
  return(
  <div className='player'>
    <h3>Salami for: {event}</h3>
    <p>Amount: {amount}</p>
  </div>
)}

export default App
