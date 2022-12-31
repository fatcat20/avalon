// Get the chat form and input field
const form = document.querySelector('#chat-form');
const input = document.querySelector('#chat-input');

// Get the chat log element
const log = document.querySelector('#chat-log');

// Handle form submission
form.addEventListener('submit', e => {
  e.preventDefault();

  // Get the message text
  const message = input.value;

  // Check if the message is a command
  if (message.startsWith('/')) {
    // Split the message into parts (command and arguments)
    const parts = message.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    // Handle the command
    if (command === '/secret') {
      // Check if the user is authorized to see the secret message
      const isAuthorized = checkAuthorization(args[0]);
      if (isAuthorized) {
        log.innerHTML += `<div class="chat-message">Secret message: ${args[1]}</div>`;
      } else {
        log.innerHTML += '<div class="chat-message">You are not authorized to see the secret message</div>';
      }
    } else {
      log.innerHTML += '<div class="chat-message">Invalid command</div>';
    }
  } else {
    // Add the message to the chat log
    log.innerHTML += `<div class="chat-message">${message}</div>`;
  }

  // Clear the input field
  input.value = '';
});

function checkAuthorization(username) {
  // Replace this with your own authorization logic
  return username === 'admin';
}
