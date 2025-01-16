// Get references to input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');
const list = document.querySelector('#list');

// Function to create a chapter list item with a delete button
function createChapterItem() {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Populate the li element with the input value (chapter title)
  li.textContent = input.value;

  // Set the delete button text and add aria-label for screen readers
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

  // Add a class for styling
  deleteButton.classList.add('deleteBtn');

  // Append the delete button to the list item
  li.append(deleteButton);

  // Append the list item to the unordered list
  list.append(li);

  // Clear the input field after adding the chapter
  input.value = '';

  // Add an event listener to delete the chapter when the button is clicked
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
}

// Add a chapter when the "Add Chapter" button is clicked
button.addEventListener('click', function() {
  if (input.value.trim()) {
    createChapterItem();
  } else {
    alert('Please enter a chapter name.');
  }
});

// Optional: Allow pressing "Enter" to add a chapter
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    button.click();
  }
});
