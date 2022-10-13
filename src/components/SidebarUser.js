import React from 'react'
import { Link } from 'react-router-dom';


function SidebarUser() {

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
    <div className='SidebarUser'>
    <nav>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={sidebar_function} />
          <span className="logo-name">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
            Voting Portal (User Portal)
          </span>
        </div>
        <div className="sidebar">
          <div className="logo">
              <i className="bx bx-menu menu-icon" onClick={sidebar_function2}/>

            <span className="logo-name">User Portal</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
              <Link to="/user/dashboard" className="nav-link"><i className="bx bx-home-alt icon" />
                  <span className="link">Dashboard</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/register-for-vote" className='nav-link'><i className='bx bxs-message-rounded-add icon' />
                  <span className="link">Register For Vote</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/elections" className="nav-link"><i className='bx bxs-upvote icon' />
                  <span className="link">Cast Your Vote</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/winning-prediction" className="nav-link"><i className='bx bx-analyse icon' />
                  <span className="link">Winning Prediction</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/results" className="nav-link"><i className='bx bxl-tailwind-css icon' />
                  <span className="link">Final Results</span></Link>
                
              </li>
              
            </ul>
            <div className="bottom-cotent">
              <li className="list">
              <Link to="/" className="nav-link"><i className="bx bx-log-out icon" />
                  <span className="link">Logout</span></Link>
                
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className="overlay" onClick={sidebar_function()}/>
    </div>
    </>
  )
}

export default SidebarUser