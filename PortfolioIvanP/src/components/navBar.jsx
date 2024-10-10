//Icons
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//Styles
import './styles/navBar.css'

export function NavBar(){
    return(
        <nav>
            <div className="containerPictureProfile">
                <img src="" alt="logoImage" />
                <h3>
                    Ivan Palmar
                </h3>
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About Me</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact Me</a>
                </li>
            </ul>
            <div>
                <FaLinkedin />
                <MdEmail />
            </div>
        </nav>
    )
}