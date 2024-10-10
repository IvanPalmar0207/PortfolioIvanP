//Styles
import './styles/aboutMe.css'

export function AboutMe(){
    return(
        <section className='containerAboutMe'>
            <h1 className='aboutMeH1'>
                HEY, I'M IVAN DAVID PALMAR MARTINEZ
                <br />
                <span>
                    I'M AN ANALYSIS AND SOFTWARE DEVELOPER
                </span>
            </h1>
            <p className='aboutMePar'>
                I have the capability to give my knowledge through the
                planification and management when the problem’s resolution
                is required working in a team developing a leadership and
                getting the different goals through the group objectives and
                results making effective communication.            
            </p>
            <div className='containerAboutButton'>
                <a className='aboutMeButton' href="https://www.linkedin.com/in/ivan-david-palmar-martinez-b04852256/" target="_blank" rel="noopener noreferrer">
                    Want to know more?
                </a>
            </div>
        </section>
    )
}