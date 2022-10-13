import React from 'react'
import '../css/voting.css';
import Sidebar from './Sidebar';

function UserVoting() {
  return (
    <>
  <Sidebar title="User"/>
  <div className="user-voting">
  <section className="profile-cards">
    <div className="profile-card-1">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-card-2">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-card-2 profile-card-3">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</>

  )
}

export default UserVoting
