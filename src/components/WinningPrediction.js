import React from 'react';
import '../css/sidebar.css';
import '../css/prediction.css';

function WinningPrediction() {
  return (
    <>
  <nav>
    <div className="logo">
      <i className="bx bx-menu menu-icon" />
      <span className="logo-name">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
        Voting Portal (User Portal)
      </span> 
    </div>
    {/* <div class="side_img">
  <div style="text-align: left"></div><img src="img/side_image.jpg"alt="" srcset=""></div>
</div> */}
    <div className="sidebar">
      <div className="logo">
        <i className="bx bx-menu menu-icon" />
        <span className="logo-name">User Portal</span>
      </div>
      {/*<div class="user_avatar">
      <img src="/img/avatar.png" alt="" srcset="" style="width:79px;    margin: 38px 79px;">
  </div>*/}
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="user_portal.html" className="nav-link">
              <i className="bx bx-home-alt icon" />
              <span className="link">Dashboard</span>
            </a>
          </li>
          <li className="list">
            <a href="user_register_form.html" className="nav-link">
              <i className="bx bxs-message-rounded-add icon" />
              <span className="link">Register For Vote</span>
            </a>
          </li>
          <li className="list">
            <a href="user_voting.html" className="nav-link">
              <i className="bx bxs-upvote icon" />
              <span className="link">Cast Your Vote</span>
            </a>
          </li>
          <li className="list">
            <a href="winning_prediction.html" className="nav-link">
              <i className="bx bx-analyse icon" />
              <span className="link">Winning Prediction</span>
            </a>
          </li>
          <li className="list">
            <a href="results.html" className="nav-link">
              <i className="bx bxl-tailwind-css icon" />
              <span className="link">Final Results</span>
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
  <div className="bar-graph">
    <div className="chartBarsWrap">
      <div className="chartBars chartBars1">
        <ul className="numbers">
          <li>
            <span>100%</span>
          </li>
          <li>
            <span>80%</span>
          </li>
          <li>
            <span>60%</span>
          </li>
          <li>
            <span>40%</span>
          </li>
          <li>
            <span>20%</span>
          </li>
          <li>
            <span>0%</span>
          </li>
        </ul>
        <ul className="bars">
          <li>
            <span className="tooltip">
              <span className="tooltipContent">
                Very important info that you should read!
              </span>
              <div data-percentage={52} className="bar greenBar trigger" />
            </span>
            <b>Alpha</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">This one is trending well.</span>
              <div data-percentage={83} className="bar blueBar trigger" />
            </span>
            <b>Beta</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">I like cheese!</span>
              <div data-percentage={94} className="bar orangeBar trigger" />
            </span>
            <b>Gamma</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">Monkey's are funny!</span>
              <div data-percentage={64} className="bar purpleBar trigger" />
            </span>
            <b>Delta</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>

  )
}

export default WinningPrediction
