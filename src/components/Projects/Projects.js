import style from './Project.module.css';
import ProjectCards from './ProjectCards/ProjectCards';

export default function Projects(props)
{
    const projects = [
        {
            Title: 'Banking Service Connector',
            Summary: 'Developed a connector project for Banking service in .Net. In this project, a third party is called to retrieve some account information and passed further to the client project where the information received can be organized in many ways.',
            Technologies: ['.Net 6.0', 'xUnit', 'FluentAssertion', 'Moq']
        },
        {
            Title: 'Roadmap Features Page',
            Summary: 'A new page was created with further features organized in a table for a specific project. The table content was read from a JSON file. The project was a web application developed fully in node.js in which the frontend part was done with the help of the Handlebars template engine.',
            Technologies: ['Javascript', 'Handlebars', 'node.js']
        },
        {
            Title: 'Personal Portofolio',
            Summary: 'Started to work on a personal portfolio for the sake of learning React. It\'s been used the GitHub pages for deployment. It has a small application on backend deployed in Azure and a DB where the references are saved. It\'s actually the project you\'re looking at.',
            Technologies: ['Javascript', 'React', 'HTML', 'CSS', 'Net 6.0', 'Entity Framework Core', 'Azure App Service']
        },
        {
            Title: 'Xml file configurator and generator tool for Automotive industry',
            Summary: 'A Graphical User Interface made in .Net (WPF), which configure xml files through its GUI editor and based on that configuration it generates C++ code used afterward by the automotive developers.',
            Technologies: ['.Net', 'xUnit', 'Modelkit', 'Autofac', 'NSubstitute', 'WPF']
        },
        {
            Title: 'Testing script for DEM Autosar layer',
            Summary: 'A python script which controls the TRACE32 debugger and executes tests according to an input comming from an excel document. The results of the tests are going to be in a html page genrated by the same script.',
            Technologies: ['python', 'html']
        },
        {
            Title: 'Dynamic Office Allocation',
            Summary: 'The purpose of this project is to improve the resources management of a company, by introducing a new concept of flexible desks. Based on initial preferences and previous feedback given by employees at the end of their day, it creates a network between people in which the nodes are represented by the employees and the edges are represented by the formed relationships (professional or social) between them. This is where we introduce the Machine Learning application which, based on the network formed till that moment, allocates each employee at the most suitable desk for him.'+
            + 'Also there is a Graphical User Interface (GUI) implemented in C++ programming language and developed in the integrated development environment(IDE), Qt5. The interface program it was implemented in order to communicate with the machine learning algorithm, respectively to create a more accessible interface with the users.',
            Technologies: ['C++', 'Linux', 'QT Framework', 'RPI3', 'R', 'SSH']
        }
    ];

    return (
        <div className={style.container}>
            <h3>Projects</h3>
            <ProjectCards Projects={projects}/>
        </div>
    );
}