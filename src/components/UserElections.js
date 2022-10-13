import React from 'react'
import { Link } from 'react-router-dom';
import '../css/user_elections.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';


function UserElections() {
  return (
    <>
    <SidebarUser/>
  <div className="user-elections">
  <div className="dashboard-cards">
    <div className="card-container">
      <div className="card">
        <div className="content">
          <h2>01</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
          
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>02</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>03</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
</>

  )
}

export default UserElections
