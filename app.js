import { UI } from "./UI.js";
import { format } from "date-fns";

UI.mainPage.sendMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage(UI.mainPage.messageInput.value);
  UI.mainPage.sendMessageForm.reset();
});

function sendMessage(message) {
  console.log(message);
  let clone = UI.mainPage.sentMessageTemplate.content.cloneNode(true);
  clone.querySelector(".sentMessageText").innerText = `Me: ${message}`;
  clone.querySelector(".time").innerText = format(new Date(), "HH:mm");
  UI.mainPage.chatBox.appendChild(clone);
}
