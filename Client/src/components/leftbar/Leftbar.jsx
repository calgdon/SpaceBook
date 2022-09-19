import React from 'react'
import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import GroupsIcon from '@mui/icons-material/Groups'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpIcon from '@mui/icons-material/Help'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'
import { Users } from '../../dummydata'
import CloseFriend from '../closefriend/CloseFriend'

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='leftbarWrapper'>
        <ul className='leftbarList'>
          <li className='leftbarListItem'>
            <RssFeedIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Feed</span>
          </li>

          <li className='leftbarListItem'>
            <ChatIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Chat</span>
          </li>

          <li className='leftbarListItem'>
            <PlayCircleIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Videos</span>
          </li>

          <li className='leftbarListItem'>
            <GroupsIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Groups</span>
          </li>

          <li className='leftbarListItem'>
            <BookmarkIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Bookmarks</span>
          </li>

          <li className='leftbarListItem'>
            <HelpIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Questions</span>
          </li>

          <li className='leftbarListItem'>
            <WorkIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Jobs</span>
          </li>

          <li className='leftbarListItem'>
            <EventIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Events</span>
          </li>

          <li className='leftbarListItem'>
            <SchoolIcon className='leftbarIcon' />
            <span className='leftbarListIteme'>Courses</span>
          </li>
        </ul>

        <button className='leftbarButton'>Show More</button>
        <hr className='leftbarHr' />

        <ul className='sidebarFriendList'>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
