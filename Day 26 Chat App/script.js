const ws = new WebSocket('ws://localhost:8080');

const chatBox = document.getElementById('chat-box');
const usernameInput = document.getElementById('username-input');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

ws.onopen = () => {
  console.log('Connected to the WebSocket server');
};

ws.onmessage = event => {
  try {
    const { type, message, username } = JSON.parse(event.data);

    if (type === 'message') {
      const messageElement = document.createElement('div');
      messageElement.textContent = `${username}: ${message}`;
      messageElement.classList.add('message', 'received');
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  } catch (error) {
    console.error('Error parsing message:', error);
  }
};

sendButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const message = messageInput.value;

  if (message && username) {
    const data = JSON.stringify({ type: 'message', message, username });
    ws.send(data);

    const messageElement = document.createElement('div');
    messageElement.textContent = `You: ${message}`;
    messageElement.classList.add('message', 'sent');
    chatBox.appendChild(messageElement);

    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

messageInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

ws.onclose = () => {
  console.log('Disconnected from the WebSocket server');
};
