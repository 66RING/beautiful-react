import React from "react"
import "./Ripples.css"




export default class Ripples extends React.Component{

  componentDidMount(){
    const buttons = document.querySelectorAll('a')
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span')
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
          ripples.remove()
        }, 1000)
      })
    })
  }



  render(){
    return (
      <div class="ripples">
        <a href="#">Button</a>
        <a href="#">Button</a>
      </div>
    )
  }

}



