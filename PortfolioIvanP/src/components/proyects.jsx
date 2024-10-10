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
            description : 'Website to manage a comercial idea where the different available products are presented offering a direct contact with the providers and the clients besides a complete administration panel that lets manage the user, products,news and events related to the application.'
        },
        {
            id : 2,
            image : projectNro2,
            title : 'Honey"s Queen',
            description : 'This website is and E-Commerce to sell pijamas for men, woman and pregnant women, it gives the option to buy throught cart to help clients to buy the products besides it offers management options for the administrators to control the users, products and orders that are generated in the website.'
        },
        {
            id : 3,
            image : projectNro3,
            title : 'Susxphxect Portfolio',
            description : ''
        },
        {
            id : 4,
            image : projectNro4,
            title : 'Arsogam',
            description : 'Third Description'
        }
    ]

    return(
        <section className="containerProjectsSection">
            <div className="titleProjects">
                <h2>
                    My Projects 
                </h2>                
            </div>
            <div className="containerCardProjects">
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
            </div>
        </section>
    )
}