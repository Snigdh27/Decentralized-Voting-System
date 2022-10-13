import React from "react";
import "../css/sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar(props) {
  function sidebar_function() {
    const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      overlay = document.querySelector(".overlay");

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
      });
    });

    // overlay.addEventListener("click", () => {
    //   navBar.classList.remove("open");
    // });
    
  }

  function sidebar_function2() {
    const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      overlay = document.querySelector(".overlay");

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        navBar.classList.remove("open");
      });
    });

    // overlay.addEventListener("click", () => {
    //   navBar.classList.remove("open");
    // });
    
  }

  return (
    <>
      <nav>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={sidebar_function} />
          <span className="logo-name">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
            Voting Portal ({props.title} Portal)
          </span>
        </div>
        <div className="sidebar">
          <div className="logo">
              <i className="bx bx-menu menu-icon" onClick={sidebar_function2}/>

            <span className="logo-name">{props.title} Portal</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
              <Link to="/admin/dashboard" className="nav-link"><i className="bx bx-home-alt icon" />
                  <span className="link">Dashboard</span></Link>
              </li>
              <li className="list">
              <Link to="/admin/create-election" className="nav-link">
              <i className="bx bx-add-to-queue icon" />
                  <span className="link">Create Election</span>
              </Link>
              </li>
              <li className="list">
              <Link to="/admin/election-details" className="nav-link">
              <i className="bx bx-message-detail icon" />
                  <span className="link">Election Details</span>
              </Link>
               
              </li>
              <li className="list">
              <Link to="/admin/candidate-details" className="nav-link">
              <i className="bx bx-message-detail icon" />
                  <span className="link">Candidate details</span>
              </Link>
              </li>
              <li className="list">
              <Link to="/admin/add-candidate" className="nav-link"><i className="bx bx-message-square-add icon" />
                  <span className="link">Add Candidate</span></Link>
                
              </li>
              <li className="list">
              <Link to="/admin/remove-candidate" className="nav-link">
              <i className="bx bx-message-square-minus icon" />
                  <span className="link">Remove Candidate</span>
              </Link>
               
              </li>
            </ul>
            <div className="bottom-cotent">
              <li className="list">
              <Link to="/" className="nav-link">
              <i className="bx bx-log-out icon" />
                  <span className="link">Logout</span>
              </Link>
                
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className="overlay" onClick={sidebar_function()}/>
    </>
  );
}

export default Sidebar;
