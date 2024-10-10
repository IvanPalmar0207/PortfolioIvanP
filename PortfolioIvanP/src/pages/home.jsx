//React-hooks
import { useEffect } from "react";
//Components
import { AboutMe } from "../components/aboutMe";
import { Experience } from "../components/experience";
import { Proyects } from "../components/proyects";
import { ContactMe } from "../components/contact";

export function Home(){

    useEffect(() => {
        document.title = 'Portfolio Ivan Palmar'
    })

    return(
        <section>
            <div>
                <AboutMe />
            </div>
            
            <div>
                <Experience />
            </div>

            <div>
                <Proyects />
            </div>

            <div>
                <ContactMe />
            </div>
        </section>
    )
}