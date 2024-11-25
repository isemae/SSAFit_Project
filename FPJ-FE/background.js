chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openWebView') {
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/webview') })
  } else if (message.action === 'openSidebar') {
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/') })
  }
})
