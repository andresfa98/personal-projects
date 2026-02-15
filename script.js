const form = document.getElementById('project-form');
const list = document.getElementById('project-list');

const projects = [
  {
    name: 'Expense tracker web app',
    description: 'Track income, expenses, and monthly saving goals.',
    priority: 'high',
  },
  {
    name: 'Portfolio website',
    description: 'Showcase my work, skills, and contact information.',
    priority: 'medium',
  },
];

function render() {
  list.innerHTML = '';

  if (!projects.length) {
    list.innerHTML = '<li>No projects yet. Add your first idea above 👆</li>';
    return;
  }

  projects.forEach((project) => {
    const li = document.createElement('li');
    li.className = 'project';
    li.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description || 'No description yet.'}</p>
      <span class="badge ${project.priority}">${project.priority.toUpperCase()}</span>
    `;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const priority = document.getElementById('priority').value;

  if (!name) return;

  projects.unshift({ name, description, priority });
  form.reset();
  render();
});

render();
