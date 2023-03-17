import { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectCardExpanded from './ProjectCardExpanded/ProjectCardExpanded';
import style from './Projects.module.css';

export default function Projects(props)
{
    const projects = [
        {
            id: 1,
            Title: 'Back office orders system management for investments',
            Summary: 'Working on a microservices architecture of a system which manages the orders of investments from banks. The system maps the data and send it further using Advanced Message Queing Protocol (e.g. RabbitMQ) to the broker, in order to buy/sell financial instruments.',
            Technologies: ['.Net 7.0', 'xUnit', 'FluentAssertion', 'Moq', 'Docker', 'Microservices Architecture', 'RabbitMQ'],
            isExpanded: true
        },
        {
            id: 2,
            Title: 'Banking Service Connector',
            Summary: 'Developed a connector project for Banking service in .Net. In this project, a third party is called to retrieve some account information and passed further to the client project where the information received can be organized in many ways.',
            Technologies: ['.Net 6.0', 'xUnit', 'FluentAssertion', 'Moq'],
            isExpanded: false
        },
        {
            id: 3,
            Title: 'Employee Capacity Management',
            Summary: 'Contributed to the internal tool features of a company for asigning employees on different projects. Depending of user\'s role, he can manage and store different information about projects, employees and generate working reports.',
            Technologies: ['.Net 6.0', 'xUnit', 'FluentAssertion', 'MediatR', 'Moq', 'React', 'HTML', 'CSS', 'EntityFrameworkCore'],
            isExpanded: false
        },
        {
            id: 4,
            Title: 'Roadmap Features Page',
            Summary: 'A new page was created with new features organized in a table for a specific project. The table content was read from a JSON file. The project was a web application developed fully in node.js in which the frontend part was done with the help of the Handlebars template engine.',
            Technologies: ['Javascript', 'Handlebars', 'node.js', 'CSS', 'HTML'],
            isExpanded: false
        },
        {
            id: 5,
            Title: 'Personal Portfolio',
            Summary: 'Started to work on a personal portfolio for the sake of learning React. The both, frontend and backend sides are deployed in Azure. The backend application is used for CRUD operations for references. It\'s been implemented a login feature where an admin can delete or change visibility for any reference.  It\'s actually the project you\'re looking at. :)',
            Technologies: ['Javascript', 'React', 'HTML', 'CSS', 'ReduxJs Toolkit', 'Net 6.0', 'Entity Framework Core', 'Azure App Service'],
            isExpanded: false
        },
        {
            id: 6,
            Title: 'Xml file configurator and generator tool for Automotive industry',
            Summary: 'A Graphical User Interface made in .Net (WPF), which configure xml files through its GUI editor and based on that configuration it generates C++ code used afterward by the automotive developers.',
            Technologies: ['.Net', 'xUnit', 'Modelkit', 'Autofac', 'NSubstitute', 'WPF'],
            isExpanded: false
        },
        {
            id: 7,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 8,
            Title: 'Dynamic Office Allocation',
            Summary: 'The purpose of this project is to improve the resources management of a company, by introducing a new concept of flexible desks. Based on initial preferences and previous feedback given by employees at the end of their day, it creates a network between people in which the nodes are represented by the employees and the edges are represented by the formed relationships (professional or social) between them. Also there is a Graphical User Interface (GUI) implemented in C++ programming language and developed in the integrated development environment(IDE), Qt5. The interface program it was implemented in order to communicate with the machine learning algorithm, respectively to create a more accessible interface with the users.',
            Technologies: ['C++', 'Linux', 'QT Framework', 'RPI3', 'R', 'SSH'],
            isExpanded: false
        },
        {
            id: 9,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 10,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 11,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 12,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 13,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 14,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
        {
            id: 15,
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html'],
            isExpanded: false
        },
    ];

    const [cardsState, setCardsState] = useState(projects);

    const handleProjectCardClick = (id) => {
        setCardsState((prevState) => 
            prevState.map((project) => {
                if (project.id == id)
                {
                    return { ...project, isExpanded: true };
                }
                else {
                    return {...project, isExpanded: false };
                }
            })
        );
    };

    return (
        <div className={style.container}>
            <SectionTitle title='Projects'></SectionTitle>
            <div className={style['cards-container']}>
                {cardsState.map((project) => (
                    <ProjectCard key={project.id} isExpanded={project.isExpanded} onClick={() => handleProjectCardClick(project.id)}></ProjectCard>
                ))}
            </div>
        </div>
    );
}