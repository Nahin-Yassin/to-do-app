function addTask() {
  var taskText = document.getElementById('taskInput').value;

  if (taskText.trim() !== '') {
    var listItem = document.createElement('li');
    listItem.textContent = taskText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteButton';

    deleteButton.addEventListener('click', function () {
      listItem.remove();
    });

    listItem.addEventListener('click', function () {
      listItem.classList.toggle('checked');
    });
    listItem.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(listItem);

    document.getElementById('taskInput').value = '';
  }
}
