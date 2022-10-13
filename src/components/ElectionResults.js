import React from 'react'
import '../css/winning_prediction.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';

function ElectionResults() {
  return (
    <>
  
  <SidebarUser/>
  <div className="election-results">
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
  </div>
</>

  )
}

export default ElectionResults
