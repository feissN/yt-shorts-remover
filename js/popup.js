"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.querySelector(".remove");

    removeButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "remove-shorts" });
        });
    });
});
