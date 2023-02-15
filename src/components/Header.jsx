import React from 'react'
import '../App.css'

const Header = (props) => {
  return (
    <div>
        <header className='nav'>
            <div className='logo'>
                <img className='logoimg' src={props.img} alt="troll" />
                <h1>Meme Generator</h1>
            </div>
            <p className='pnav'>my react project</p>
        </header>
    </div>
  )
}

export default Header