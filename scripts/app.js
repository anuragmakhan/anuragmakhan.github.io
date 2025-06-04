// This file contains the JavaScript code for the portfolio page.
// You can add interactivity, animations, or dynamic content loading here.

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('h1');
    greeting.textContent = 'Welcome to My Portfolio!';
    document.body.appendChild(greeting);

    const projects = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' }
    ];

    const projectList = document.createElement('ul');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
        projectList.appendChild(listItem);
    });

    document.body.appendChild(projectList);
});