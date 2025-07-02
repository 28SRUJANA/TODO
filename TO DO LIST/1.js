const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> <span>${taskText}</span>`;
    
    
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed', checkbox.checked);
    });

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }
}

addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
