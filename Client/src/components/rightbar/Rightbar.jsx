import React from 'react'
import './rightbar.css'
import {Users} from "../../dummydata"
import Online from "../online/Online"

export default function Rightbar({ user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  

  const HomeRightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src={`${PF}gift.png`} alt='' />
          <span className='birthdayText'>
            <b> Darth Maul</b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img
          className='rightbarAd'
          src={`${PF}posts/tieinterceptor.jpeg`}
          alt=''
        />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : " " }</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/bobafett.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Boba Fett</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/c3p0.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>C3P0</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/darthmaul.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Darth Maul</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/darthvader.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Darth Vader</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/leiaskywalker.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Leia Skywalker</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/lukeskywalker.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Luke Skywalker</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/palpatine.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Palpatine</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${PF}characters/yoda.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Yoda</span>
          </div>
        </div>
      </>
    )
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}


  