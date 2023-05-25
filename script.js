document.addEventListener("DOMContentLoaded", function() {
    var chatMessages = document.getElementById("chat-messages");
    var userInput = document.getElementById("user-input");
    var sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", sendMessage());
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        var userMessage = userInput.value.trim();
        if (userMessage !== "") {
            displayUserMessage(userMessage);
            sendToBackend(userMessage);
            userInput.value = "";
        }
    }

    function displayUserMessage(message) {
        var userBubble = createChatBubble(message, "user-bubble");
        chatMessages.appendChild(userBubble);
    }

    function displayAssistantMessage(message) {
        var assistantBubble = createChatBubble(message);
        chatMessages.appendChild(assistantBubble);
    }

    function createChatBubble(message, className) {
        var bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        if (className) {
            bubble.classList.add(className);
        }
        bubble.textContent = message;
        return bubble;
    }

    function sendToBackend(message) {
        // Send the message to the backend (API call or processing logic)
        // Receive the response from the backend and call displayAssistantMessage()
        var response = "Response from the backend"; // Replace with actual response
        displayAssistantMessage(response);
    }
});
