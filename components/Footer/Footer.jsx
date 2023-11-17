import "./footer.css"
import logo from "../../assest/logo.jpeg"

export const Footer = () =>{
    return (
        <div>
            <div className="footer">
                <div className="footer-content">
                    <ul>
                        <h3>The Basics</h3>
                        <li><a href="#">About Aon</a></li>
                        <li><a href="#">Contant US</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <ul>
                        <h3>Get Invovled</h3>
                        <li><a href="#">Contribution Bible</a></li>
                        <li><a href="#">Add New Movie</a></li>
                        <li><a href="#">Add New TV Show</a></li>
                    </ul>
                    <ul>
                        <h3>Community</h3>
                        <li><a href="#">Guidelines</a></li>
                        <li><a href="#">Discussions</a></li>
                        <li><a href="#">Leaderoard</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}