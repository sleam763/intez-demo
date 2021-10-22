import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <a href="#"><img src="logoi.png" /></a>
                    <Link to="/"><a className="active" href="/"><i className="fa fa-home"></i></a></Link>
                    <Link to="/wallet"><a href="/wallet"><i className="fa fa-search"></i></a></Link>
                    <Link to="/payment"><a href="/payment"><i className="fa fa-envelope"></i></a></Link>
                    <Link to="/invoice"><a href="/invoice"><i className="fa fa-envelope"></i></a></Link>
                    <Link></Link>
                    
                    
                    <a href="#"><i className="fa fa-globe"></i></a>
                    <a href="#"><i className="fa fa-trash"></i></a>
                </div>
                <div class="topnav">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search Here" name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                        
                        <i class="fa fa-bell"></i>
                        <i class="fa fa-user"></i>
                    </form>
                </div>
            </div>
        )
    }
};

export default Header;