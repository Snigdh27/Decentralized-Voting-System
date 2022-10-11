import React from 'react'
import '../css/user_elections.css';
import Sidebar from './Sidebar';

function UserElections() {
  return (
    <>
  <Sidebar/>
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
          <a href="voting_candidates_user.html">Cast Your Vote</a>
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
          <a href="voting_candidates_user.html">Cast Your Vote</a>
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
          <a href="voting_candidates_user.html">Cast Your Vote</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</>

  )
}

export default UserElections
