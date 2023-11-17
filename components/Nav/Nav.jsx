import "./nav.css"
import { useState } from "react";

import logo from "../../assest/logo.jpeg";

export const Nav = () => {
    const [clas, setClas] = useState(false)

  
    const apperList = () => {
        setClas(!clas);
    }
    return (
        <div>
            <div className="nav-all">
            <div className="container-small">
            <div className="nav-head">
                <div className="nav-left">
                    <img src={logo} />
                    <div className="nav-border">
                        <div>TV</div>
                    </div>
               
                    <ul>
                        <li>
                            <div className="menu">
                                <i className="nav-i" class="fas fa-chevron-circle-down" onClick={apperList}></i>
                                <div className={clas ? "active": "notactive"}>
                                    <ul className="list-menu">
                                        <div>
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">TV show</a></li>
                                        <li><a href="#">People</a></li>
                                        <li><a href="#">More</a></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="#" className="a">Movies</a></li>
                        <li><a href="#" className="a">TV show</a></li>
                        <li><a href="#" className="a">People</a></li>
                        <li><a href="#" className="a">More</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <span>+</span>
                    <ul>
                        <li><a href="#" className="border"> EN </a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#"> Join Aon</a></li>
                    </ul>
                    <i class="fas fa-search"></i>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}