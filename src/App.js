import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState}from 'react';
import { trackPromise } from 'react-promise-tracker';


function App() {

  const [user,setUser]= useState([]);
  function fetchData() {
  
    trackPromise(
      
    fetch("https://reqres.in/api/users?page=1")
      .then(response => {
        if (!response.ok) {
          throw Error("New error");
        }
        return response.json();
  
      }))
      .then(data => {
        const html = data.data.map(user => {
          return `
             
               <div class="user">
              <p> <img src="${user.avatar}" alt= "$user.first_name"/> </p>
              <p>Name: ${user.first_name} ${user.last_name} </p>
              <p>Email : ${user.email}</p>
              </div>
              ` ;
            
        },[])
          .join("");
        document.querySelector("#root").insertAdjacentHTML("afterbegin", html);
        setUser(html);
      })
     
     
      .catch(error => {
        console.log("error");
  
      });
    
      
  } 

  return (
    <>
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Adidas</span>
          <form class="nav-item">
          
           <button id="getUser" class="btn btn-outline-success me-2" type="button" onClick={fetchData}>Get Users</button>
           
          
            
          </form>
        </div>
      </nav>
    </>
  )
}
export default App;
