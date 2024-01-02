// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Example of adding a project dynamically
    const projectsList = document.getElementById('projects-list');
  
    // Example project data (you can add more or fetch from an API)
    const projects = [
      { name: 'Project 1', description: 'Description for Project 1' },
      { name: 'Project 2', description: 'Description for Project 2' },
      { name: 'Project 3', description: 'Description for Project 3' },
    ];
  
    // Render projects
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
      projectsList.appendChild(projectElement);
    });
  });
  