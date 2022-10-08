import React from 'react'
import '../css/sidebar.css';
import '../css/winning_prediction.css';

function ElectionResults() {
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
  <section className="results">
    <main>
      <h1>Final Election Results</h1>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Region</th>
            <th>Votes</th>
            {/* <th>Chickens</th>
                  <th>Pigs</th>
                  <th>Snakes</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Ancient Spire Outpost</td>
            <td data-label="Grid">V-21</td>
            <td data-label="Type">Outpost</td>
            <td data-label="Region">The Ancient Isles</td>
            {/* <td data-label="Chickens">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="no">&#10007;</span>
                  </td> */}
          </tr>
          <tr>
            <td data-label="Name">Barnacle Cay</td>
            <td data-label="Grid">T-19</td>
            <td data-label="Type">Small Island</td>
            <td data-label="Region">The Ancient Isles</td>
            {/* <td data-label="Chickens">
                      <span class="yes">&#10003;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="no">&#10007;</span>
                  </td> */}
          </tr>
          <tr>
            <td data-label="Name">Black Sand Atoll</td>
            <td data-label="Grid">T-3</td>
            <td data-label="Type">Small Island</td>
            <td data-label="Region">The Wilds</td>
            {/* <td data-label="Chickens">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="yes">&#10003;</span>
                  </td> */}
          </tr>
          <tr>
            <td data-label="Name">Black Water Enclave</td>
            <td data-label="Grid">X-5</td>
            <td data-label="Type">Small Island</td>
            <td data-label="Region">The Wilds</td>
            {/* <td data-label="Chickens">
                      <span class="yes">&#10003;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="no">&#10007;</span>
                  </td> */}
          </tr>
          <tr>
            <td data-label="Name">Blind Man's Lagoon</td>
            <td data-label="Grid">S-6</td>
            <td data-label="Type">Small Island</td>
            <td data-label="Region">The Wilds</td>
            {/* <td data-label="Chickens">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="yes">&#10003;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="no">&#10007;</span>
                  </td> */}
          </tr>
          <tr>
            <td data-label="Name">Booty Isle</td>
            <td data-label="Grid">N-25</td>
            <td data-label="Type">Small Island</td>
            <td data-label="Region">The Ancient Isles</td>
            {/* <td data-label="Chickens">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Pigs">
                      <span class="no">&#10007;</span>
                  </td>
                  <td data-label="Snakes">
                      <span class="yes">&#10003;</span>
                  </td> */}
          </tr>
        </tbody>
      </table>
    </main>
  </section>
</>

  )
}

export default ElectionResults
