
import { Suspense } from 'react';
import LoadData from './api';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import LikeCounter from './likeCounter';
import Users from './Users';
import Friends from './Friends';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const friendsPromise = fetchFriends()

function App() {

  // function handleClick() {
  //   alert("clicked")
  // }

  const handleClick = () => alert("clicked")

  const add10With = (num) => {
    const newNum = num + 10;
    alert(newNum);
  }

  return (
    <>
      <h1>Get started</h1>

      <button onClick={handleClick}>Click</button>

      <button onClick={() => alert('click2')}>Click 2</button>

      <button onClick={() => add10With(5)}>Click add 10</button>

      <Counter></Counter>

      <LikeCounter></LikeCounter>

      <Batsman></Batsman>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback = {<h3>Loading Friends List...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

    </>
  )
}

export default App
