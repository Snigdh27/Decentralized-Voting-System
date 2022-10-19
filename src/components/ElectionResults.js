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
            <td data-label="Name">Candidate-1</td>
            <td data-label="Grid">Party-1</td>
            <td data-label="Type">Region-1</td>
            <td data-label="Region">XXXXXX</td>
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
            <td data-label="Name">Candidate-2</td>
            <td data-label="Grid">Party-2</td>
            <td data-label="Type">Region-2</td>
            <td data-label="Region">XXXXXX</td>
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
            <td data-label="Name">Candidate-3</td>
            <td data-label="Grid">Party-3</td>
            <td data-label="Type">Region-3</td>
            <td data-label="Region">XXXXXX</td>
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
            <td data-label="Name">Candidate-4</td>
            <td data-label="Grid">Party-4</td>
            <td data-label="Type">Region-4</td>
            <td data-label="Region">XXXXXX</td>
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
          
        </tbody>
      </table>
    </main>
  </section>
  </div>
</>

  )
}

export default ElectionResults
