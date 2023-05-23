"use strict";

const removeShorts = () => {
    const items = document.querySelectorAll("ytd-grid-video-renderer #thumbnail");
    const shorts = [...items].filter((item) => item.href.includes("shorts"));
    shorts.forEach((short) => {
        short.parentNode.parentElement.parentElement.remove();
    });
};

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "remove-shorts") {
        removeShorts();
    }
});
