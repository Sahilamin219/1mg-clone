import React, { Component } from 'react'
import './navbar.css'
import logo from '../../logo192.png'
import { Link } from 'react-router-dom';
import CategoryNav from '../CategoryNav/CategoryNav';
import { Menu, Input } from 'semantic-ui-react';
import SignedInLinks from './signedInLinks/SignedInLinks';
const brandLogoSize = {
    height: '60px',
    marginTop: '5px'
}

const navLinksStyle = {
    color: 'black !important'
}


export default class Navbar extends Component {
 
    render() {
        return (
            <>
            <nav>
              <div className="nav-wrapper hide-on-small-and-down">

                <ul className='navSectionRight left'>
                  <li>
                    <img src={logo} style={brandLogoSize} alt="upachar"/>
                  </li>

                  <li className="nav-item"><button className="btn white z-depth-0">MEDICINES
                    </button> </li>
                    
                    <li className="nav-item"><button className="btn white z-depth-0">LAB</button> </li>
                    
                    <li className="nav-item"><button className="btn white z-depth-0">AYURVEDA
                    </button> </li>
                </ul>
                <ul className='navSectionRight right'>
                  <SignedInLinks/>
                </ul>

              </div>
            </nav>
            <div>
              <CategoryNav/>
            </div>
            </>

        )
    }
}
