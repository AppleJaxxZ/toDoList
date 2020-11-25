const toDoApp = () => {
  //  DOM selectors
  const addToButton = document.getElementById('addToDo');
  const toDoContainer = document.getElementById('toDoContainer');
  const clearButton = document.getElementById('remove');
  const inputField = document.getElementById('inputField');

  //  Helper functions
  const clearToDo = () => {
    while (toDoContainer.firstChild) {
      toDoContainer.removeChild(toDoContainer.firstChild);
    }
  };

  const toggleToDo = (todo) => {
    todo.classList.toggle('completed');
  };

  const removeToDo = (todo) => {
    todo.remove();
  };

  const addToDo = () => {
    if (inputField.value !== '') {
      // Creates the ToDo
      const paragraph = document.createElement('p');
      paragraph.classList.add('paragraph-styling');
      paragraph.innerText = inputField.value;

      // Crates buttons container
      const buttonContainer = document.createElement('div');

      // Creates the toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'toggle-btn';
      toggleBtn.textContent = 'Check';

      // Creates the remove button
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = 'Remove';

      // Adds the elements to DOM
      buttonContainer.appendChild(toggleBtn);
      buttonContainer.appendChild(removeBtn);
      paragraph.appendChild(buttonContainer);
      toDoContainer.appendChild(paragraph);

      // Listners for our created elements
      toggleBtn.addEventListener('click', function () {
        toggleToDo(this.parentElement.parentElement);
      });
      removeBtn.addEventListener('click', function () {
        removeToDo(this.parentElement.parentElement);
      });
    }

    // Resets the input text
    inputField.value = '';
  };

  // Listners for adding and clearing the todos
  addToButton.addEventListener('click', addToDo);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addToDo();
  });
  clearButton.addEventListener('click', clearToDo);
};

// Starts your application on window load
window.onload = toDoApp;
