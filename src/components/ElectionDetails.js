import React from 'react';
import '../css/sidebar.css';
import '../css/user_voting.css';

function ElectionDetails() {
  return (
    <div>
      <>
  <nav>
    <div className="logo">
      <i className="bx bx-menu menu-icon" />
      <span className="logo-name">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
        Voting Portal (Admin Portal)
      </span>
    </div>
    <div className="sidebar">
      <div className="logo">
        <i className="bx bx-menu menu-icon" />
        <span className="logo-name">Admin Portal</span>
      </div>
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="admin_portal.html" className="nav-link">
              <i className="bx bx-home-alt icon" />
              <span className="link">Dashboard</span>
            </a>
          </li>
          <li className="list">
            <a href="create_election.html" className="nav-link">
              <i className="bx bx-add-to-queue icon" />
              <span className="link">Create Election</span>
            </a>
          </li>
          <li className="list">
            <a href="admin_election_details.html" className="nav-link">
              <i className="bx bx-message-detail icon" />
              <span className="link">Election Details</span>
            </a>
          </li>
          <li className="list">
            <a href="admin_candidate_details.html" className="nav-link">
              <i className="bx bx-message-detail icon" />
              <span className="link">Candidate details</span>
            </a>
          </li>
          <li className="list">
            <a href="add_candidate.html" className="nav-link">
              <i className="bx bx-message-square-add icon" />
              <span className="link">Add Candidate</span>
            </a>
          </li>
          <li className="list">
            <a href="remove_candidate.html" className="nav-link">
              <i className="bx bx-message-square-minus icon" />
              <span className="link">Remove Candidate</span>
            </a>
          </li>
        </ul>
        <div className="bottom-cotent">
          <li className="list">
            <a href="../cover_page.html" className="nav-link">
              <i className="bx bx-log-out icon" />
              <span className="link">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
  <section className="overlay" />
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
          <a href="#">Cast Your Vote</a>
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
          <a href="#">Cast Your Vote</a>
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
          <a href="#">Cast Your Vote</a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>04</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="#">Cast Your Vote</a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>05</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="#">Cast Your Vote</a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>06</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="#">Cast Your Vote</a>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default ElectionDetails
