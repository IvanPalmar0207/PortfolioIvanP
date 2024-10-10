//React Icons
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
//Styles
import './styles/cardProject.css'

export const CardProject = ({imageUrl, title, description}) => {
    return(
        <div>
            <img src={imageUrl} alt="someImageProject" />
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <TbWorld />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}