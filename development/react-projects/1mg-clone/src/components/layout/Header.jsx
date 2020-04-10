import React from 'react';
import Navbar from '../navbar/Navbar'

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <Navbar/>
            </div>
        )
    }
}

export default Header;