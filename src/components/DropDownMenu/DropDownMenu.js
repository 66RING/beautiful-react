import React from 'react'
import './DropDownMenu.css'

export default class DropDownMenu extends React.Component {

  componentDidMount(){
    const drop_btn = document.querySelector('.drop-btn')

    const menu_wrapper = document.querySelector('.wrapper')
    const menu_bar = document.querySelector('.menu-bar')

    const setting_drop = document.querySelector('.setting-drop')
    const help_drop = document.querySelector('.help-drop')

    const setting_item = document.querySelector('.setting-item')
    const help_item = document.querySelector('.help-item')

    const back_setting_btn = document.querySelector('.back-setting-btn')
    const back_help_btn = document.querySelector('.back-help-btn')

    drop_btn.onclick = (()=>{
      menu_wrapper.classList.toggle('show')
    })

    setting_item.onclick = (()=>{
      menu_bar.style.marginLeft = '-400px'
      setTimeout(() => {
        setting_drop.style.display = "block"
      }, 100)
    })
    help_item.onclick = (()=>{
      menu_bar.style.marginLeft = '-400px'
      setTimeout(() => {
        help_drop.style.display = "block"
      }, 100)
    })

    back_setting_btn.onclick = (()=>{
      menu_bar.style.marginLeft = '0px'
      setting_drop.style.display = 'none'
    })
    back_help_btn.onclick = (()=>{
      menu_bar.style.marginLeft = '0px'
      help_drop.style.display = 'none'
    })
  }


  render(){
    return(
      <nav>

        <div className='drop-btn'>
          Drop down <span className='fas fa-caret-down'></span>
        </div>

        <div className='wrapper'>
          <ul className='menu-bar'>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-home'></span> </div>
              Home
            </a></li>
            <li className='setting-item'><a href='#'>
              <div className='icon'> <span className='fas fa-cog'></span> </div>
              Settings & privacy <i className='fas fa-angle-right'></i>
            </a></li>
            <li className='help-item'><a href='#'>
              <div className='icon'> <span className='fas fa-question-circle'></span> </div>
              Help & support <i className='fas fa-angle-right'></i>
            </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-user'></span> </div>
              About us
            </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-comment-alt'></span> </div>
              Feeback
            </a></li>
          </ul>

          {/* Settings && privacy Menu-items */}
          <ul className='setting-drop'>
            <li className='arrow back-setting-btn'><span className='fas fa-arrow-left'></span>Settings && privacy</li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-user'></span> </div>
              Personal info </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-lock'></span> </div>
              Password </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-address-book'></span> </div>
              Activity log </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-globe-asia'></span> </div>
              Languages </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-sign-out-alt'></span> </div>
              Log out </a></li>
          </ul>

          {/* Help && support Menu-items */}
          <ul className='help-drop'>
            <li className='arrow back-help-btn'><span className='fas fa-arrow-left'></span>Help && support</li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-question-circle'></span> </div>
              Help centre </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-envelope'></span> </div>
              Suppport inbox </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-comment-alt'></span> </div>
              Send feeback </a></li>
            <li><a href='#'>
              <div className='icon'> <span className='fas fa-exclamation-circle'></span> </div>
              Report problem </a></li>
          </ul>
        </div>
      </nav>
    )
  }

}
