export const UI = {
  mainPage: {
    buttons: document.querySelectorAll("[data-popup-target]"),
    messageInput: document.querySelector(".messageBox"),
    sendMessageForm: document.querySelector(".messageForm"),
    chatBox: document.querySelector(".chatbox"),
    sentMessageTemplate: document.querySelector("#myMessage"),
    sentMessage: document.querySelector(".sentMessage"),
  },
  closePopUps: document.querySelectorAll("[data-close-button]"),
  settings: {
    settingsBox: document.querySelector(".settings"),
  },
  overlay: document.querySelector(".overlay"),
};

UI.mainPage.buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.popupTarget);
    popUp(target);
  });
});

function popUp(box) {
  if (box == null) return;
  UI.settings.settingsBox.classList.add("active");
  UI.overlay.classList.add("active");
}

UI.closePopUps.forEach((button) => {
  button.addEventListener("click", () => {
    const box = button.closest(".settings");
    closePopUp(box);
  });
});

function closePopUp(box) {
  if (box == null) return;
  box.classList.remove("active");
  UI.overlay.classList.remove("active");
}
