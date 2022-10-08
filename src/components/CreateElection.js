import React from 'react';
import '../css/sidebar.css';
import '../css/user_register.css';

function CreateElection() {
  return (
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
            <a href="admin_dashboard.html" className="nav-link">
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
  <div className="container-registration">
    <div className="title">Create New Election</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Type</span>
            <input
              type="text"
              placeholder="Enter the type of Election"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Organiser</span>
            <input
              type="text"
              placeholder="Enter organiser's details"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Start Date</span>
            <input type="date" placeholder="Enter the start date" required="" />
          </div>
          <div className="input-box">
            <span className="details">End Date</span>
            <input type="date" placeholder="Enter the end date" required="" />
          </div>
          <div className="input-box">
            <span className="details">Start Time</span>
            <input type="time" placeholder="Enter the start time" required="" />
          </div>
          <div className="input-box">
            <span className="details">End Time</span>
            <input type="time" placeholder="Enter the end time" required="" />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Create Election" />
        </div>
      </form>
    </div>
  </div>
  <section className="overlay" />
</>

  )
}

export default CreateElection
