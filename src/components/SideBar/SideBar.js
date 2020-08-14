import React from "react"
import './SideBar.css'


export default class SideBar extends React.Component{




componentDidMount(){
}

toggleMenu(){
  let navigation = document.querySelector('.navigation')
  let toggle = document.querySelector('.toggle')
  navigation.classList.toggle('active')
  toggle.classList.toggle('active')
}

render(){

  return (
    <div className='sidebar'>
      <div className='navigation'>
        <ul>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-home" aria-hidden='true'></i></span>
              <span className='title'>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-user" aria-hidden='true'></i></span>
              <span className='title'>Profile</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-comment" aria-hidden='true'></i></span>
              <span className='title'>Messages</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-question-circle" aria-hidden='true'></i></span>
              <span className='title'>Help</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-cog" aria-hidden='true'></i></span>
              <span className='title'>Setting</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-lock" aria-hidden='true'></i></span>
              <span className='title'>PassWord</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa fa-sign-out" aria-hidden='true'></i></span>
              <span className='title'>Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='toggle' onClick={this.toggleMenu}></div>
    </div>
  )
}

}




