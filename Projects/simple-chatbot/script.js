const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const clearBtn = document.getElementById("clear-btn");


let chatHistory = [];
let memory = {
  name: localStorage.getItem("username") || null
};

// Load previous messages when page loads
loadChatHistory();

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
  clearBtn.addEventListener("click", clearChat);

});

function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === "") return;

  // Display user message
  appendMessage(userText, "user");

  // Clear input
  userInput.value = "";

  // Show typing indicator first
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("bot-message");
  typingDiv.innerHTML = 'Typing<span class="typing"></span><span class="typing"></span><span class="typing"></span>';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    typingDiv.remove(); // remove "typing" bubble
    const botResponse = getBotResponse(userText);
    appendMessage(botResponse, "bot");
  }, 1000);
}

// ✅ Now these functions are *outside* sendMessage()
function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Save to chat history array
  chatHistory.push({ sender, text });
  // Save chat history to localStorage
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

function loadChatHistory() {
  const storedChat = localStorage.getItem("chatHistory");
  if (storedChat) {
    chatHistory = JSON.parse(storedChat);
    chatHistory.forEach(msg => appendMessage(msg.text, msg.sender));

    // Personalized greeting
    if (memory.name) {
      appendMessage(`Welcome back, ${memory.name}! 👋`, "bot");
    } else {
      appendMessage("Hi there 👋! How can I help you today?", "bot");
    }
  } else {
    if (memory.name) {
      appendMessage(`Welcome back, ${memory.name}! 👋`, "bot");
    } else {
      appendMessage("Hi there 👋! What's your name?", "bot");
    }
  }
}

function getBotResponse(input) {
  input = input.toLowerCase();
  let reply = "";

  // Greeting logic
  if (input.includes("hello") || input.includes("hi")) {
    reply = memory.name
      ? `Hello again, ${memory.name}! 😊`
      : "Hi there! What's your name?";
  }

  // Capture name
  else if (input.includes("my name is")) {
    const nameMatch = input.match(/my name is (.+)/i);
    if (nameMatch && nameMatch[1]) {
      const name = nameMatch[1].trim();
      memory.name = name;
      localStorage.setItem("username", name);
      reply = `Nice to meet you, ${name}! I'll remember that.`;
    } else {
      reply = "Sorry, I didn’t catch your name. Can you repeat it?";
    }
  }

  // Recall name
  else if (input.includes("what's my name") || input.includes("whats my name")) {
    reply = memory.name
      ? `Your name is ${memory.name}! 😄`
      : "I don't know your name yet. What's your name?";
  }

  // Farewell
  else if (input.includes("bye")) {
    reply = memory.name
      ? `Goodbye, ${memory.name}! Have a great day 😊`
      : "Goodbye! Have a great day 😊";
  }

  // Help
  else if (input.includes("help")) {
    reply = "Sure! I can help. What do you need assistance with?";
  }

  // Default
  else {
    reply = "I'm not sure I understand 🤔, can you rephrase?";
  }

  return reply;
}

function clearChat() {
  chatBox.innerHTML = "";
  chatHistory = [];
  localStorage.removeItem("chatHistory");
  localStorage.removeItem("username");
  memory.name = null;
  appendMessage("Chat cleared 🧹 Memory reset! What's your name?", "bot");
}