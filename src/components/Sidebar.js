import React from "react";
import "../css/sidebar.css";

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
      <section className="overlay" onClick={sidebar_function()}/>
    </>
  );
}

export default Sidebar;
