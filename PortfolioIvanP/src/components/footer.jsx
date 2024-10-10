//React-icons
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
//Styles
import './styles/footer.css'

export function Footer(){
    return(
        <footer>
            <div>   
                <h3>
                    Ivan David Palmar Martinez
                </h3>
                <p>
                    Some Description footer
                </p>
            </div>
            <div>
                <h3>
                    Social Media
                </h3>
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            <div>
                <p>
                    Copyright 2024. Made By Ivan David Palmar Martinez
                </p>
            </div>
        </footer>
    )
}