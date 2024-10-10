//React-navigation
import {Link} from 'react-router-dom'
//Components
import { CardTool } from './cardTool'
//Image
import angularLogo from'./img/experience/angularLogo.svg'
import djangoLogo from'./img/experience/djangoLogo.svg'
import firebaseLogo from'./img/experience/firebaseLogo.svg'
import ionicLogo from'./img/experience/ionicLogo.svg'
import javaLogo from'./img/experience/javaLogo.svg'
import kotlinLogo from'./img/experience/kotlinLogo.svg'
import mongoLogo from'./img/experience/mongoLogo.svg'
import mysqlLogo from'./img/experience/mysqlLogo.svg'
import nodejsLogo from'./img/experience/nodejsLogo.svg'
import phpLogo from'./img/experience/phpLogo.svg'
import postgreLogo from'./img/experience/postgreLogo.svg'
import reactLogo from'./img/experience/reactLogo.svg'
//Styles
import './styles/experience.css'

export function Experience(){

    const tools = [
        {   
            id : 1,
            imageUrl : angularLogo,
            nameTool : 'Angular',
            descriptionTool : 'Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.'
        },
        {
            id : 2,
            imageUrl : djangoLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Django is software you can use to develop web applications quickly and efficiently. Most web applications have several common functions, like authentication, information retrieval from a database, and cookie management. Developers have to code similar functionality into every web app they write.'
        },
        {
            id : 3,
            imageUrl : firebaseLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Firebase provides detailed documentation and cross-platform app development SDKs, to help you build and ship apps for iOS, Android, the Web, Flutter, Unity, and C++.'
        },
        {
            id : 4,
            imageUrl : ionicLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Ionic is an open source UI toolkit for building performant, high-quality mobile apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue. Get started building by installing Ionic or following our First App Tutorial to learn the main concepts.'
        },
        {
            id : 5,
            imageUrl : javaLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.'
        },
        {
            id : 6,
            imageUrl : kotlinLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Kotlin is a general-purpose development language used mainly for Android mobile app development. Besides Android apps, Kotlin is also useful for the following: Server-side development. Back-end web app development traditionally uses Java.'   
        },
        {
            id : 7,
            imageUrl : mongoLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'MongoDB (link resides outside ibm.com) is an open source, nonrelational database management system (DBMS) that uses flexible documents instead of tables and rows to process and store various forms of data.'   
        },
        {
            id : 8,
            imageUrl : mysqlLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'MySQL is an open–source relational database management system (RDBMS). It is one of the most popular databases globally, known for its reliability, and scalability. MySQL is designed to run on various operating systems, including Windows, Linux, macOS, and more.'   
        },
        {
            id : 9,
            imageUrl : nodejsLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.'   
        },
        {
            id : 10,
            imageUrl : phpLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'PHP is a server-side scripting language embedded in HTML in its simplest form. PHP allows web developers to create dynamic content and interact with databases. PHP is known for its simplicity, speed, and flexibility — features that have made it a cornerstone in the web development world.'   
        },
        {
            id : 11,
            imageUrl : postgreLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'PostgreSQL is an object-relational database management system (ORDMBS), which means that it has relational capabilities and an object-oriented design. Using object-oriented features of PostgreSQL, programmers can: Communicate with the database servers using objects in their code. Define complex custom data types.'   
        },
        {
            id : 12,
            imageUrl : reactLogo,
            nameTool : 'Tool Name',
            descriptionTool : 'React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies.'   
        },
    ]

    return(
        <section className='containerExperienceSection'>
            <h3>
                Let's Get to Know Me!                    
            </h3>
            <div className='containerParImgExperience'>                
                <p>
                    I am an Analysis and Software Developer technologist, i know
                    frameworks for front-end development such as React,
                    Bootstrap and Tailwind CSS, for the backend i have very good
                    skills in Django, Express and Next Js. I manage programming
                    language like Python, Java, JavaScript, Php, C++ and Kotlin,
                    besides HTML5 and CSS3, i have very good experience with
                    relational Databases and data management with MySQL,
                    PostgreSQL, SQLite3 and SQLServer, and for non-relational
                    databases i have used before mongoDB(collections and
                    documents). I master SCRUM methodology that is so
                    important because it allows me to work perfectly with a team
                    doing a really good job in the different springs along the
                    project development. I have deployed applications to the
                    internet making use of Railway to storage the logic, database,
                    static and non-static files, i also have deployed my
                    applications in vercel and netlify, i have configured custom
                    domains to give to the users a better experience when they
                    want to access to the platform.
                </p>
                <img src="" alt="profilePicture" />
            </div>

            <div className='containerSkillExpe'>
                <div>
                    <h3>
                        My Skills gained through years
                    </h3>
                </div>
                <div className='containerSkillsGained'>
                    {tools.map((tool) => {
                        return(
                            <CardTool 
                                key={tool.id} 
                                imageUrl={tool.imageUrl} 
                                nameTool={tool.nameTool} 
                                descriptionTool={tool.descriptionTool}
                            />
                        )
                    })}  
                </div>              
            </div>

            <div className='containerExpeButton'>
                <a href="">
                    Contact Me
                </a>
            </div>
        </section>
    )
}