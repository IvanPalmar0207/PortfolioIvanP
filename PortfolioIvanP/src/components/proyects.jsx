//Component
import { CardProject } from "./cardProject"
//Images
import projectNro1 from './img/projects/honeyProjectNro1.jpg'
import projectNro2 from './img/projects/fungiProjectNro2.jpg'
import projectNro3 from './img/projects/susphecProjectNro3.jpg'
import projectNro4 from './img/projects/arsoProjectNro4.png'
//Styles
import './styles/projects.css'

export function Proyects(){

    const projects = [
        {
            id : 1,
            image : projectNro1,
            title : 'Tejido Fungi',
            description : 'First Description'
        },
        {
            id : 2,
            image : projectNro2,
            title : 'Honey"s Queen',
            description : 'Second Description'
        },
        {
            id : 3,
            image : projectNro3,
            title : 'Susxphxect Portfolio',
            description : 'Second Description'
        },
        {
            id : 4,
            image : projectNro4,
            title : 'Arsogam',
            description : 'Third Description'
        }
    ]

    return(
        <section>
            <div>
                <h2>
                    My Projects 
                </h2>                
            </div>
                {
                    projects.map(project => {
                        return(
                            <CardProject 
                                key={project.id}
                                imageUrl={project.image}
                                title={project.title}
                                description={project.description}
                            />
                        )
                    })
                }
            <div>
            </div>
        </section>
    )
}