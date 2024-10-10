//Styles
import './styles/cardTool.css'

export const CardTool = ({imageUrl, nameTool, descriptionTool}) => {
    return(
        <div>
            <img src={imageUrl} alt="toolPicture" />
            <h4>
                {nameTool}
            </h4>
            <p>
                {descriptionTool}
            </p>
        </div>
    )
}